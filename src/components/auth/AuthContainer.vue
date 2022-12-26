<template>
  <div class="auth-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AuthContainer'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.auth-container {
  max-width: 410px;
  width: 100%;
  padding: 30px;
  background: $main-bg-color;
}
</style>