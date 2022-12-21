// eslint-disable-next-line vue/multi-word-component-names
<template>
  <button v-bind:type="typeBtn" :class="classBtn" @click="$emit('emit')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Button',
  props: {
    typeBtn: {
      type: String,
      default: 'button'
    },
    classBtn: {
      type: String,
      required: true
    },
  },

  
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.btn {
  position: relative;
  display: inline-block;
  font-size: 18px;
  background: $main-accent-color;
  color: $main-bg-color;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;
  transition: background-color 0.4s, color 0.4s;
  font-family: Montserrat, sans-serif;

  &:hover {
    background: $main-bg-color;
    color: $main-accent-color;
    border: 1px solid $main-accent-color;
  }

  &--outlined {
    background: none;
    border: 1px solid $main-accent-color;
    color: $main-accent-color;
  }

  &__content {
    &--hidden {
      opacity: 0;
    }
  }

  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.btnMore {
  background: $add-bg-color;
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;
  padding: 12px;
  font-family: inherit;
  font-size: 16px;

}
</style>