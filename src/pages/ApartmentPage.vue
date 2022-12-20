<template>
  <div>
    <Container>
      <h2>apartment</h2>
    </Container>

  </div>
</template>

<script>
import Container from '../components/shared/Container.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'ApartmentPage',
  components: {
    Container
  },
  mounted(){
    console.log(this.$route.query.name)
  }
}
</script>

<style lang="scss" scoped>

</style>