<template>
  <form class="apartments-filter" @submit.prevent="handleSubmit">
    <CustomSelect :items="sities" v-model="city" margin="right-margin" />
    <CustomInput type="number" v-model="minPrice" placeholder="Price from" margin="right-margin"
      error-message="Field haven`t to be empty" :rules="rules" />
    <Button v-bind:typeBtn="typeBtn" v-bind:classBtn="classBtn">{{ textBtn }}
    </Button>
  </form>
</template>

<script>
import CustomSelect from '../shared/CustomSelect.vue';
import CustomInput from '../shared/CustomInput.vue';
import Button from '../shared/Button.vue';
import sities from './sities';
import { isRequired, charLimit } from '@/utils/validationsRules';
export default {
  name: 'ApartmentFilter',
  data() {
    return {
      sities: sities,
      minPrice: '',
      classBtn: 'btn',
      typeBtn: 'submit',
      textBtn: 'Selection of housing',
      city: ''
    }
  },
  components: {
    CustomSelect,
    CustomInput,
    Button
  },
  computed: {
    rules() {
      return [isRequired, charLimit(10)]
    }
  },
  methods: {
    buttonClick() {
      console.log('click')
    },
    handleSubmit() {
      this.$emit('submit',
        {
          city: this.city,
          price: this.minPrice
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin.scss';

.apartments-filter {
  padding-top: 60px;
  padding-bottom: 39px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @include mq(tablet) {
    flex-wrap: nowrap;
  }
}
</style>