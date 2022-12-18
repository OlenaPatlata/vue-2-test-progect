<template>
  <footer class="footer">

  </footer>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
@import '../assets/scss/mixin.scss';
.footer{
  background: $dark-bg-color;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 99px;
  width: 100%;

  @include mq(s-mobile) {
    width: 320px;
  }

  @include mq(mobile) {
    width: 480px;
  }

  @include mq(tablet) {
    width: 768px;
  }

  @include mq(desktop) {
    width: 1366px;
  }
}
</style>