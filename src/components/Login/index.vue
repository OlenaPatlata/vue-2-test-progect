<template>
  <AuthContainer>
  <Form ref="form" @submit.prevent="handleSubmit">
    <CustomInput v-model="formData.email" name="email" :rules="emailRules" placeholder="Email"  />
    <CustomInput v-model="formData.password" name="password" :rules="passwordRules" placeholder="Password"  />
    <Button typeBtn="submit" class-btn="btn">Login</Button>
  </Form>
</AuthContainer>
</template>

<script>
import Form from '../form/index.vue';
import CustomInput from '../shared/CustomInput.vue';
import Button from '../shared/Button.vue';
import { emailValidation, passwordValidation, isRequired } from '../../utils/validationsRules'
import AuthContainer from '../auth/AuthContainer.vue';
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
    CustomInput,
    Button,
    AuthContainer
  },
  computed: {
    rules() {
      return {
        emailValidation, passwordValidation, isRequired
      }
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation]
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation]
    },
  },
  methods: {
    handleSubmit() {
      const isFormValid = this.$refs.form.validate()
      if(isFormValid){
        console.log(this.formData)
      }
      
    }
  },
  mounted(){
    console.log(this.$refs.form)
  }
}
</script>

<style lang="scss" scoped>

</style>