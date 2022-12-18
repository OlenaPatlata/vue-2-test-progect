<template>
  <div id="app">
    <div class="content">
      <Header />
      <Container>
        <ApartmentFilter class="apartments-filter" @submit="filter" />
        <div v-if="!filteredApartments?.length" class="title-wrapper">
          <p class="title">Nothing have found</p>
        </div>
        <ApartmentsList v-else :items="filteredApartments">
          <template v-slot:title>
            <div class="title-wrapper">
              <p class="title">Selection according to choice</p>
            </div>
          </template>
          <template v-slot:apartment="{ apartment }">
            <ApartmentsItem :key="apartment.id" :price="apartment.price" :rating="apartment.rating"
              :descr="apartment.descr" :imgSrc="apartment.imgUrl" />
          </template>
        </ApartmentsList>

      </Container>
    </div>
    <Footer />
  </div>
</template>

<script>
import ApartmentsList from './components/apartments/ApartmentsList.vue'
import ApartmentsItem from './components/apartments/ApartmentsItem.vue'
import apartments from './components/apartments/apartments.js'
import Container from './components/shared/Container.vue'
import ApartmentFilter from './components/apartments/ApartmentFilter.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    Container,
    ApartmentFilter,
    Footer,
    Header

  },
  data() {
    return {
      apartments: apartments,
      filters: {
        city: '',
        price: 0
      }
    }
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPricet(this.apartments))
    }
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city
      this.filters.price = price
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments

      return apartments.filter(apartment => {
        return apartment.location.city === this.filters.city
      })
    },
    filterByPricet() {
      if (!this.filters.price) return apartments

      return apartments.filter(apartment => {
        return apartment.price >= this.filters.price
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/variables.scss';

#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: $main-bg-color;
}

.content {
  flex-grow: 1;
}

.title-wrapper {
  padding-bottom: 20px;
}

.title {
  text-align: left;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

}
</style>
