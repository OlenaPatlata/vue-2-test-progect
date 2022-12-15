<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="sities"/>
    <CustomInput type="text" v-model="minPrice" placeholder="Цена от" />
    <Button v-bind:typeBtn="typeBtn" v-bind:classBtn="classBtn" @click="handleSubmit">{{textBtn}}</Button>
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
        textBtn: 'Click me'
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
.form {
  display: flex;
  &__select {
    margin-right: 30px;
  }
  &__submit {
    margin-left: auto;
  }
}
</style>