<template>
  <div class="review-item__wrapper" >
    <ReviewHeading :rating="review.rating" :author="review.author"/>
    <p class="review-item__content">{{ review.content }}</p>
  </div>
</template>

<script>
import ReviewHeading from './ReviewHeading.vue';

export default {
  name: 'ReviewItem',
  components: {
    ReviewHeading
  },
  props: {
    review: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';
.review-item__wrapper{
  border-left: 2px solid $add-bg-color;
  border-right: 2px solid $add-bg-color;
  border-bottom: 2px solid $add-bg-color;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: $main-bg-color;
}
.review-item__content{
  margin-top: 16px;

  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>