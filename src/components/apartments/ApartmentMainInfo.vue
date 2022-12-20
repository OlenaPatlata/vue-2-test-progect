<template>
  <article class="apartment-main-info">
    <div class="wrapper-left">
      <div class="apartment-main-info__title">
        <p class="apartment-main-info__text">{{ apartment.title }}</p>
        <StarRating :rating="apartment.rating" />
      </div>
      <img :src="apartment?.imgUrlBig" alt="" class="apartment-main-info__photo" />
      <div class="apartment-main-info__descr">{{ apartment?.descr }}</div>
      <div class="button-wrapper"><Button classBtn="btn">Забронировать
        </Button></div>
    </div>
    <div class="wrapper-right">
      <OwnerInfo :owner="apartment.owner" />
    </div>


  </article>
</template>

<script>
import StarRating from '../shared/StarRating.vue';
import Button from '../shared/Button.vue';
import OwnerInfo from './OwnerInfo.vue';
export default {
  name: 'ApartmentMainInfo',
  components: {
    StarRating,
    Button,
    OwnerInfo
  },
  props: {
    apartment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.apartment-main-info {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  &__title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding-bottom: 20px;
  }

  &__text {
    margin-right: 20px;
  }

  &__photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__descr {
    padding-top: 30px;
    padding-bottom: 24px;
  }
}

.button-wrapper {
  padding-left: 288px;
  padding-right: 288px;
}

.wrapper-left {
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
}
.wrapper-right {
  width: 30%;
  display: flex;
  flex-direction: column;

}
</style>