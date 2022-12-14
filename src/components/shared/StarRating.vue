<template>
  <div class="star-rating">
    <span class="star starNoFill" v-for="index in starLimit" :key="index"></span>
    <div class="starRatingColored" :style="countRatingWidth">
      <span class="star starFill" v-for="index in starLimit" :key="index"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StarRating',
    props: {
      rating: {
        type: Number,
        default: 0
      },
      starLimit: {
        type: Number,
        default: 5
      }
    },
    computed: {
      countRatingWidth(){
        return `width: ${this.rating / this.starLimit * 100}%;`
      }
    }
  }
</script>

<style lang="scss" scoped>
.star-rating{
  position: relative;
  display: inline-flex;
}
.starRatingColored{
  position: absolute;
  display: inline-flex;
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}
.starFill{
  display: inline-block;
  width: 34px;
  height: 34px;
  margin: 0 3px;
  flex-shrink: 0;
  background: url('../../assets/svg/starFill.svg') center no-repeat;
}
.starNoFill{
  display: inline-block;
  width: 34px;
  height: 34px;
  margin: 0 3px;
  flex-shrink: 0;
  background: url('../../assets/svg/starNoFill.svg') center no-repeat;
}

</style>