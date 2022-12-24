<template>
  <main class="main">
    <Container>
      <ApartmentFilter class="apartments-filter" @submit="filter" />
    </Container>
    <Container>
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
          <ApartmentsItem :key="apartment.id" :id="apartment.id" :price="apartment.price.total" :name="apartment.name"
            :type="apartment.type" :rating="apartment.rating" :currency="apartment.currency" :userId="apartment.userId"
            :address="apartment.address" :imgSrc="apartment.images[0]" />
        </template>
      </ApartmentsList>
    </Container>

  </main>
</template>

<script>
import ApartmentsList from '../components/apartments/ApartmentsList.vue'
import ApartmentsItem from '../components/apartments/ApartmentsItem.vue'
import ApartmentFilter from '../components/apartments/ApartmentFilter.vue'
import Container from '../components/shared/Container.vue'
import { getApartmentsList } from '../services/apartmen.service'



export default {
  name: 'HomePage',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilter,
    Container,
  },
  data() {
    return {
      apartments: () => [],
      filters: {
        city: '',
        price: 0
      }
    }
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments,
      ))
      // return this.apartments
    }
  },
  async created() { //Hook
    try {
      const { results } = await getApartmentsList()
      // eslint-disable-next-line no-import-assign
      this.apartments = results
    } catch (error) {
      console.log(error)
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
    filterByPrice() {
      if (!this.filters.price) return this.apartments

      return this.apartments.filter(apartment => {
        return apartment.price.total >= this.filters.price
      })
    }
  }
}
</script>

<style lang="scss">
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
