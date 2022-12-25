<template>
  <Form @submit="handleSubmit">
    <CustomInput v-model="formData.email" name="email" />
    <CustomInput v-model="formData.password" name="password" />
  </Form>
</template>

<script>
import Form from '../form/index.vue';
import CustomInput from '../shared/CustomInput.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    Form,
    CustomInput
  },
  methods: {
    handleSubmit(){
      console.log(this.formData)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>