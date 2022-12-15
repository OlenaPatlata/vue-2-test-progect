<template>
  <div class="container">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Container'
  }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin.scss';
/* .container{
  max-width: 1110px;
  margin: 0 auto;
} */
.container {
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @include mq(s-mobile) {
    width: 320px;
  }

  @include mq(mobile) {
    width: 480px;
  }

  @include mq(tablet) {
    padding-left: 74px;
    padding-right: 74px;
    width: 768px;
  }

  @include mq(desktop) {
    padding-left: 128px;
    padding-right: 128px;
    width: 1366px;
  }
}

</style>