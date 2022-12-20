<template>
  <section class="owner-info">
    <div class="owner-info__title">
      <p class="owner-info__text">Infomation about owner</p>
    </div>
    <p class="owner-info__data">Name: {{ owner.name }}</p>
    <p class="owner-info__data">Tel: {{ owner.phone }}</p>
    <p class="owner-info__data">E-mail: {{ owner.email }}</p>
  </section>


</template>

<script>
export default {
  name: 'OwnerInfo',
  props: {
    owner: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.owner-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: $add-bg-color;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;

  &__title {
    margin-bottom: 20px;
  }

  &__text {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }

  &__data {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    overflow: hidden;
  }
}
</style>