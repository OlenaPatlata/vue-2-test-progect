<template>
  <Form>
<CustomInput name="email"/>
<CustomInput name="password"/>
  </Form>
</template>

<script>
import Form from '../form/index.vue';
import CustomInput from '../shared/CustomInput.vue';
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    components: {
      Form,
      CustomInput
    }
  }
</script>

<style lang="scss" scoped>

</style>