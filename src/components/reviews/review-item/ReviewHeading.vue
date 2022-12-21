<template>
  <div class="review-heading">
    <ReviewAvatar />
    <div class="review-heading__content">
      <span class="review-heading__author">{{ author }}</span>
      <StarRating :rating="rating" />
    </div>
  </div>
</template>

<script>
import StarRating from '@/components/shared/StarRating.vue';
import ReviewAvatar from './ReviewAvatar.vue';
export default {
  name: 'RevieHeading',
  components: {
    StarRating,
    ReviewAvatar
  },
  props: {
    author: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.review-heading {
  display: flex;
  &__content{
    margin-left: 20px;
  }
}
</style>