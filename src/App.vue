<template>
  <div id="app">
    <Container>
      <ApartmentFilter />
    </Container>
    <ApartmentsList :items="apartments">
      <template v-slot:title>
        <p class="title">Подборка согласно выбора</p>
      </template>
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem 
          :key="apartment.id" 
          :price="apartment.price" 
          :rating="apartment.rating" 
          :descr="apartment.descr" 
          :imgSrc="apartment.imgUrl"
          />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentsList from './components/apartments/ApartmentsList.vue'
import ApartmentsItem from './components/apartments/ApartmentsItem.vue'
import apartments from './components/apartments/apartments.js'
import Container from './components/shared/Container.vue'
import ApartmentFilter from './components/apartments/ApartmentFilter.vue'

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    Container,
    ApartmentFilter
  },
  data() {
    return {
      apartments: apartments
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: $main-bg-color;
}
.title{
  text-align: left;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

}
</style>
