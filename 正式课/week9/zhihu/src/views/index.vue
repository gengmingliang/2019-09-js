<template>
  <div class="mainPage">
    <div>
      <router-view></router-view>
    </div>
    <nav class="navBox">
      <div>
        <router-link to="/home">
          <i class="iconfont icon-11"></i>
          <div>首页</div>
        </router-link>
      </div>
      <div>
        <router-link to="/vip">
          <i class="iconfont icon-huiyuan-"></i>
          <div>会员</div>
        </router-link>
      </div>
      <div>
        <i class="iconfont icon-yingyong- add" @click="show"></i>
      </div>
      <div>
        <router-link to="/notify">
          <i class="iconfont icon-tongzhi"></i>
          <div>通知</div>
        </router-link>
      </div>
      <div>
        <router-link to="/user">
          <i class="iconfont icon-icon-user"></i>
          <div>{{loginState ? "我的" : "未登录"}}</div>
        </router-link>
      </div>
    </nav>
    <my-dialog :isshow="flag" @close='close'>
      啊啊啊啊啊啊
    </my-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
import dialog from '@/components/dialog.vue'
// @ is an alias to /src
export default {
  data() {
    return {
      flag:false
    };
  },
  created() {
    if(!localStorage.getItem('token')){
      this.$router.push('/login')
    }
  },
  components: {
    'my-dialog':dialog
  },
  computed: {
    ...mapState(["loginState"])
  },
  methods: {
    show(){
      this.flag=true
    },
    close(){
      this.flag=false
    }
  },
};
</script>
<style lang="less" scoped>
.mainPage>div:nth-child(1){
  padding-bottom: 18vw;
}
//scoped 当前样式 只对当前模板 起作用
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
  width: 100%;
  height: 18vw;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  > div {
    flex: 1;
    text-align: center;
    > a {
      text-decoration: none;
      color: #333;
      display: block;
      width: 100%;
      height: 100%;
      i {
        font-size: 7vw;
        font-weight: 800;
      }
      div {
        font-size: 5vw;
      }
    }
    i.add {
      font-size: 10vw;
      color: skyblue;
    }
    a.router-link-active {
      color: pink;
    }
  }
}
</style>