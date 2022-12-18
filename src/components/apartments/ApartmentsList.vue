<template>
  <div>
    <slot name="title"></slot>
    <ul class="apartments-list">
      <template v-for="apartment in items">
        <slot name="apartment" v-bind:apartment="apartment"></slot>
      </template>
    </ul>
  </div>

</template>

<script>

export default {
  name: 'ApartmentsList',
  props: {
    items: {
      type: Array,
      default: () => { }
    }
  }
}
</script>

<style lang="scss" scoped>
/* .apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
} */
@import '../../assets/scss/mixin.scss';

.apartments-list {
  display: grid;
  max-width: calc(100vw);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  @include mq(tablet) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @include mq(desktop) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
  }
}
</style>