<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h2 class="reviews__title">Summary rating</h2>
      <div class="reviews__rating">
        <span>{{ amountOfReviews }} review(s)</span>
        <StarRating :rating="totalRaiting" />
      </div>
    </div>
    <ReviewItem v-for="review in currentReviews" :key="review.author" :review="review" />
    <Button classBtn="btnMore" v-on:emit="showMoreReviews">{{togleBtnText ? `Read more...` : `That is all.`}}</Button>
  </section>
</template>

<script>
import ReviewItem from './review-item/ReviewItem.vue';
import Button from '../shared/Button.vue';
import StarRating from '../shared/StarRating.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Reviews',
  components: {
    ReviewItem,
    Button,
    StarRating
  },
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      limitReviews: 2,
      togleBtnText: true
    }
  },
  computed: {
    totalRaiting() {
      const total = this.reviews.reduce((acc, review) => acc + review.rating, 0);
      return total / this.reviews.length
    },
    amountOfReviews() {
      return this.reviews.length
    },
    currentReviews() {
      if(this.amountOfReviews > this.limitReviews){
        return this.reviews.slice(0, this.limitReviews)
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.togleBtnText=false
        return this.reviews}
    },
  },
  methods: {
    showMoreReviews() {
      if ((this.amountOfReviews - this.limitReviews) > 0) {
        this.limitReviews += 1
      } 
      if((this.amountOfReviews - this.limitReviews) === 0){
        this.togleBtnText=false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.reviews {
  margin-top: 20px;

  &__heading {
    background: $add-bg-color;
    padding: 20px 20px 10px;
  }

  &__title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>