<template>
  <el-form ref="form" :model="form" label-width="80px" class='myform'>
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
		<el-form-item label="性别">
      <el-radio-group v-model="form.sex">
        <el-radio label="0">男</el-radio>
        <el-radio label="1">女</el-radio>
      </el-radio-group>
    </el-form-item>
		<el-form-item label="邮箱">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
		<el-form-item label="电话">
      <el-input v-model="form.phone"></el-input>
    </el-form-item>
    <el-form-item label="部门">
      <el-select v-model="form.departmentId" placeholder="请选择活动区域">
        <el-option v-for="item in departmentList" 
        :label="item.name||''"
        :key="item.id" 
        :value="item.id"></el-option>
      </el-select>
    </el-form-item>
		<el-form-item label="职务">
      <el-select v-model="form.jobId" placeholder="请选择活动区域">
        <el-option v-for='item in jobList' :label="item.name||''" :key='item.id' :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="自我介绍">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import {addUserList} from '@/api/index.js'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      form: {
        name: "",
        sex:"",
        email:"",
        phone:"",
        departmentId:"",
        jobId:"",
        desc: ""
      }
    };
  },
  computed: {
    // departmentList(){
    //   return this.$store.state.departmentList;
    // },
    // JobList(){
    //   return this.$store.state.JobList;
    // }
    ...mapState(['departmentList','jobList','userList'])
  },
  created() {
    this.$store.dispatch('changeJobList')
    // 在这调用action中的方法 该方法调用接口获取数据 成功后调用mutations中的对应方法 然后把state中的数据修改 state中的数据修改之后触发当前组件的视图更新
    let obj = this.userList.filter(item=>item.id==this.$route.query.id)[0]
    console.log(obj)
    this.form = obj || this.form
    this.form.departmentId
    this.form.jobId
  },
  methods: {
    onSubmit() {
      addUserList(this.form).then(data=>{
        console.log(data)
      })
      console.log("submit!");
    }
  }
};
</script>