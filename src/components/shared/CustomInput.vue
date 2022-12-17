<template>
  <input v-on="listeners" class="custom-input" v-bind:class="margin" :placeholder="placeholder" >
</template>

<script>
  export default {
    name: 'CustomInput',
    emits: {
      input: 'input'
    },
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      margin: {
        type: String,
        default: ''
      }
    },
    computed: {
      listeners(){
        return {...this.$listeners, input: event => this.$emit('input', event.target.value)}
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
@import '../../assets/scss/mixin.scss';
.wrapper-input {
  position: relative;
  display: inline-flex;
}
.custom-input {
  height: 40px;
  width: 100%;
  border: 2px solid $main-accent-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;
  &::placeholder {
    color: inherit;
  }
  &--error {
    border-color: $error-color;
  }
  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: $error-color;
    line-height: 1.3;
  }
}
.right-margin{
  margin-bottom: 20px;
  @include mq(tablet){
    margin-bottom: 0;
    margin-right: 20px;
    width: 200px;
  }
  @include mq(desktop){
    margin-bottom: 0;
    margin-right: 419px;
    width: 220px;
  }
  
}
</style>