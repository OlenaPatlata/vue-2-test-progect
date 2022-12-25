<template>
  <div class="wrapper-input">
    <input v-on="listeners" v-bind="$attrs" class="custom-input"
      v-bind:class="{rightMargin: true, 'custom-input__border': !isValid}" :placeholder="placeholder">
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>

</template>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      isValid: true,
      error: ''
    }
  },
  emits: {
    input: 'input'
  },
  inheritAttrs: false,
  inject: {
    form: { default: 'form' }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    margin: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: ''
    },
    rules: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    listeners() {
      return { ...this.$listeners, input: event => this.$emit('input', event.target.value) }
    }
  },
  watch: {
    value() {
      this.validate()
    }
  },
  mounted() {
    if (!this.form) return
    console.log(this.form)
    this.form.registerInput(this)
  },
  beforeDestroy() { //помнить про утечку памяти
    if (!this.form) return
    this.form.unRegisterInput(this)
  },
  methods: {
    validate(value) {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(value);

        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }
        return hasPassed
      });
    },
    reset(){
      this.$emit('input', ''); //метод эмитит событие input с пустым значением
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
@import '../../assets/scss/mixin.scss';

.wrapper-input {
  position: relative;
  display: inline-flex;
}

.custom-input {
  height: 40px;
  width: 100%;
  border: 2px solid $main-accent-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: inherit;
  }

  &__border {
    border-color: $error-color;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: $error-color;
    line-height: 1.3;
  }
}

.rightMargin {
  margin-bottom: 20px;

  @include mq(tablet) {
    margin-bottom: 0;
    margin-right: 20px;
    width: 200px;
  }

  @include mq(desktop) {
    margin-bottom: 0;
    margin-right: 419px;
    width: 220px;
  }

}
</style>