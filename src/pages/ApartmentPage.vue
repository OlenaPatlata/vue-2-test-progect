<template>
  <SectionWithHeaderSpacer>
    <div class="apartment-page">
      <Container>
        <ApartmentMainInfo :apartment="apartment" />
      </Container>
    </div>
  </SectionWithHeaderSpacer>
</template>

<script>
import Container from '../components/shared/Container.vue'
import ApartmentMainInfo from '@/components/apartments/ApartmentMainInfo.vue'
import SectionWithHeaderSpacer from '@/components/shared/SectionWithHeaderSpacer.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'ApartmentPage',
  components: { ApartmentMainInfo, Container, SectionWithHeaderSpacer },
  mounted() {
    console.log(this.$route.params)
    console.log(this.$route.query)

  },
  computed: {
    apartment() {
      return {
        id: this.$route.params.id,
        name: this.$route.query.name,
        type: this.$route.query.type,
        rating: this.$route.query.rating,
        userId: this.$route.query.userId,
        src: this.$route.query.src,
        owner: this.$route.query.owner
      }
    },

  }
}
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-top: 60px;
  padding-bottom: 72px;
}
</style>