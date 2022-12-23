<template>
  <li class="apartments-item">
    <div class="apartments-item__inner">
      <img :src="imgSrc" alt="" class="apartments-item__photo" />
      <div class="apartments-item__content">
        <p class="apartments-item__description">
          Address: {{ address }}
        </p>
        <p class="apartments-item__description">
          Type: {{ type }}
        </p>
        <p class="apartments-item__description">
          Description: {{ name }}
        </p>
        <div class="apartments-item__rating">
          <StarRating :rating="rating" />
        </div>
        <div class="apartments-item__price">
          {{ currency }} {{ price }}
        </div>
        <router-link :to="{
          name: 'apartment', params: { id: id }, query: {
            name: name, rating: rating, type: type, src: imgSrc, owner: userId
          }
        }" class="apartments-item__link"></router-link>
      </div>
    </div>

  </li>
</template>

<script>
import StarRating from '../shared/StarRating.vue';
export default {
  components: { StarRating },
  name: 'ApartmentsItem',
  props: {
    id: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    rating: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    },
    userId: {
      type: Number,
      required: true
    }

  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.apartments-item {
  position: relative;

  &__inner {
    position: relative;
  }

  &__content {
    position: relative;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s linear;
    background: rgba(#0f1d2d, 0.7);
    min-height: 200px;
    color: $main-bg-color;
    text-align: left;
    line-height: 1.4;
    cursor: pointer;
    z-index: 1;
    display: flex;
    flex-direction: column;

    &:hover {
      opacity: 1;
    }
  }

  &__description {
    margin-bottom: 20px;
    max-height: calc(1em * 1.4 * 3);
    overflow: hidden;
  }

  &__rating {
    margin-bottom: 20px;
  }

  &__price {
    font-size: 20px;
    font-weight: 600;
  }

  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>