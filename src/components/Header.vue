<template>
  <header class="header">
    <Container>
      <div class="header__wrapper">
        <Logo />
        <div class="profile">
          <span class="profile__text">profile</span>
          <div class="profile__icon"></div>
        </div>
      </div>

    </Container>
  </header>
</template>

<script>
import Container from './shared/Container.vue';
import Logo from './Logo.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  components: {
    Container,
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
@import '../assets/scss/mixin.scss';

.header {
  position: sticky;
  z-index: 2;
  top: 0;
  left: 0;
  background: $dark-bg-color;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;

  @include mq(s-mobile) {
    width: 320px;
  }

  @include mq(mobile) {
    width: 480px;
  }

  @include mq(tablet) {
    width: 768px;
  }

  @include mq(desktop) {
    width: 1366px;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
}

.profile {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  letter-spacing: 1.19;
  color: $main-bg-color;

  &__icon {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-left: 10px;
    background: url('../assets/svg/user.svg') center no-repeat;
  }
}
</style>