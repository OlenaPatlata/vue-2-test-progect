<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="sities" margin="right-margin"/>
    <CustomInput type="text" v-model="minPrice" placeholder="Price from" margin="right-margin"/>
    <Button v-bind:typeBtn="typeBtn" v-bind:classBtn="classBtn" >{{textBtn}}</Button>
  </form>
</template>

<script>
import CustomSelect from '../shared/CustomSelect.vue';
import CustomInput from '../shared/CustomInput.vue';
import Button from '../shared/Button.vue';
import sities from './sities';
  export default {
    name: 'ApartmentFilter',
    data(){
      return {
        sities: sities,
        minPrice: '',
        classBtn: 'btn',
        typeBtn: 'submit',
        textBtn: 'Selection of housing'
      }
    },
    components: {
      CustomSelect,
      CustomInput,
      Button
    },
  methods: {
    buttonClick(){
      console.log('click')
    },
    handleSubmit(){
      this.$emit('submit', 'form submited')
    }
  }
  }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin.scss';
.form {
  padding-top: 60px;
  padding-bottom: 39px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @include mq(tablet){
    flex-wrap: nowrap;
  }
}
</style>