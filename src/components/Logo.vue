<template>
  <div class="logo">
    <div class="logo__icon"></div>
    <div class="logo__text">
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;


  &__icon {
    display: inline-block;
    width: 26px;
    height: 28px;
    margin-right: 10px;
    background: url('../assets/svg/door.svg') center no-repeat;
  }
  
  &__text{
    display: inline-block;
    width: 87px;
    height: 22px;
    background: url('../assets/svg/GOHome.svg') center no-repeat;
  }
}
</style>