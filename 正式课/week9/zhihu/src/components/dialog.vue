<template>
  <transition name="fade">
    <div class="mask" v-show="isshow" @touchend.self='$emit("close")'>
      <transition>
        <div class="contentBox" v-show="isshow">
          <slot name="header"></slot>
          <slot></slot>
          <slot name="footer"></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
// @ is an alias to /src
export default {
  name: "mydialog",
  props:['isshow'],
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less" scope>
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}
.contentBox {
  width: 100%;
  padding: 10vw;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #ffffff;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
  min-height: 40vw;
}
.fade-enter,.fade-leave-to{
    opacity: 0;
}
.fade-enter-active,.fade-leave-active{
    transition: all 0.3s
}
.fade-enter-to,.fade-leave{
    opacity: 1;
}
.updown-enter,.updown-leave-to{
    transform: translateY(100vw)
}
.updown-enter-active,.updown-leave-active{
    transition: all 0.3s
}
.updown-enterto,.updown-leave{
    transform: translateY(0)
}
</style>