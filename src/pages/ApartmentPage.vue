<template>
  <div class="apartment-page">
    <Container>
      <ApartmentMainInfo :apartment="apartment"/>
    </Container>

  </div>
</template>

<script>
import Container from '../components/shared/Container.vue'
import apartments from '../components/apartments/apartments.js'
import ApartmentMainInfo from '@/components/apartments/ApartmentMainInfo.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'ApartmentPage',
  components:{ApartmentMainInfo, Container},
  data() {
    return {
      apartments: apartments
    }
  },
  mounted() {
    console.log(this.$route.query.name)
  },
  computed: {
    apartment(){
      return apartments.find(apartment => apartment.id === this.$route.params.id)
    },

  }
}
</script>

<style lang="scss" scoped>
.apartment-page{
  padding-top: 60px;
  padding-bottom: 72px;
}
</style>