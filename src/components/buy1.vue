<template>
    <el-row class="bedDiv">
       <el-col :span="24">
          <el-table :data="beds" highlight-current-row @selection-change="selsChange"
                style="width: 100%;">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="MEDEQUCDE" label="床号"></el-table-column>
          <el-table-column prop="MEDEQUNM" label="床名" width="100"></el-table-column>
          <el-table-column prop="NOTE" label="备注" width="150"></el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button size="small" @click="editBed(scope.$index,scope.row)">编辑</el-button>
              <el-button type="danger" @click="deleteBed(scope.$index,scope.row)" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
       </el-col>
       <el-col :span="24">
            <el-button type="danger" @click="batchDeleteBook" :disabled="this.sels.length===0" class="batchRemove">批量删除</el-button>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              @prev-click="handleCurrentChange"
              @next-click="handleCurrentChange"
              :page-sizes="[15, 20, 25, 30]"
              :page-size="pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
            </el-pagination>
       </el-col>
       <el-dialog title="编辑" :visible.sync ="editFormVisible" :close-on-click-modal="false">
        <el-form :model="editForm" label-width="100px" :rules="editFormRules" ref="editForm">
          <el-form-item label="床位号" prop="MEDEQUCDE">
            <el-input v-model="editForm.MEDEQUCDE" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="床位名" prop="MEDEQUNM">
            <el-input v-model="editForm.MEDEQUNM" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="NOTE">
            <el-input type="textarea" v-model="editForm.NOTE" :rows="3"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="editFormVisible = false">取消</el-button>
          <el-button type="primary" @click.native="editSubmit">提交</el-button>
        </div>
      </el-dialog>
    </el-row>
</template>
<style scoped lang="scss">
  .bedDiv{
    .batchRemove{margin-top: 10px}
    .el-pagination{float:right;margin-top: 22px;}
  }
  
</style>
<style lang="scss">
  .bedDiv{
      .el-table td, .el-table th{padding:7px 0;}
  }
</style>
<script>
 import * as API from '../api/index.js'
  export default {
    data() {
      return {
        beds:[],
        page: 1,
        pagesize: 15,
        total:0,
        sels: [], //列表选中列
        handtype:'',
        XH:'',
        MEDEQUCDE:'',
        MEDEQUNM:'',
        NOTE:'',
        //编辑相关数据
        editFormVisible: false,//编辑界面是否显示
        editFormRules: {
          MEDEQUCDE: [
            {required: true, message: '请输入床位号', trigger: 'blur'}
          ],
          MEDEQUNM: [
            {required: true, message: '请输入床名', trigger: 'blur'}
          ]
        },
        editForm: {
          XH: 0,
          MEDEQUCDE: '',
          MEDEQUNM: '',
          NOTE: ''
        },
      };
    },
    methods:{
      handleSearch(){
        this.page = 1;
        this.pagesize = 15;
        this.search();
      },
      search(){
        let that = this;
        API.GET('acMedTreEqu.do?action=getMedTreEquLst',{
            DIV_CODE:1171,
            page:that.page,
            pagesize:that.pagesize,
            outtype:'json'
        })
          .then((response) => {
            that.beds =response.data;
            that.total=Number(response.allRecnum);
          })
          .catch((err) => {
             that.$message.error('请求出错，请联系管理员');
          })
      },
      //改变每页显示条数
      handleSizeChange(val){
        this.pagesize = val;
        this.search();
      },
      //改变页数
      handleCurrentChange(val){
        this.page = val;
        this.search();
      },
      //多选
      selsChange: function (sels) {
        this.sels = sels;
      },
      //批量删除
      batchDeleteBook: function () {
        let that = this;
        that.XH = that.sels.map(item => item.XH).toString();
        that.handtype="del";
        let params={
            handtype:that.handtype,
            DIV_CODE:1171,
            XH:that.XH,
        }
        this.changeBed(params);
      },
      //删除
      deleteBed:function(index,rows){
        let that = this;
        that.handtype="del";
        that.XH=rows.XH;
        let params={
            handtype:that.handtype,
            DIV_CODE:1171,
            XH:that.XH,
        }
        this.changeBed(params);
      },
      //新增、更新、删除
      changeBed:function(params){
        let that = this;
        API.GET('acMedTreEqu.do?action=MedTreEquWH',params)
          .then((response) => {
            that.search();
            if(params.handtype=="edt"){
              that.editFormVisible = false;
            }
          })
          .catch((err) => {
             that.$message.error('请求出错，请联系管理员');
          })
      },
      //显示编辑界面
      editBed: function (index, row) {
        this.editFormVisible = true;
        this.editForm = Object.assign({}, row);
      },
       //编辑
      editSubmit: function () {
        let that = this;
        this.$refs.editForm.validate((valid) => {
          if (valid) {
            that.handtype="edt";
            let params={
                handtype:that.handtype,
                DIV_CODE:1171
            }
            let para = Object.assign({}, this.editForm,params);
            that.changeBed(para);
          }
        });
      }

    },
    mounted() {
      this.handleSearch()
    }
  }
</script>
