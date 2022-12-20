<template>
  <Container>
    <section class="error">
      <h1 class="error__title">Page not found</h1>
    </section>
  </Container>
</template>

<script>
import Container from '@/components/shared/Container.vue';
export default {
  name: 'ErrorPage',
  components: { Container }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;

  &__title {
    color: $error-color;
    font-weight: 600;
    font-size: 40px;
    text-align: center;
  }
}
</style>