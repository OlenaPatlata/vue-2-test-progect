<template>
  <select v-on="listeners" class="custom-select" v-bind:class="margin">
    <option 
      v-for="item in formattedItems" 
      :key="item?.value" 
      :value="item?.value" 
      :selected="item?.selected">
      {{item?.label}}
    </option>

  </select>
</template>

<script>
  export default {
    name: 'CustomSelect',
    props: {
      items: {
        type: Array,
        required: true
      },
      margin: {
        type: String,
        default: ''
      }
    },
    emits: {
      input: 'input'
    },
    computed: {
      listeners(){
        return {...this.$listeners, input: event => this.$emit('input', event.target.value)}
      },
      formattedItems(){
        const newArray = [];
        this.items.map(item => {
          typeof item==='object' ? newArray.push(item): newArray.push({value: item, label: item })
        })
        return newArray
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/mixin.scss';
.custom-select {
  height: 40px;

  width: 100%;
  border: 2px solid $main-accent-color;
  font-size: 18px;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  display: inline-block;
  @include mq(tablet){
    max-width: 220px;
  }
}
.right-margin{
  margin-bottom: 20px;
  @include mq(tablet){
    margin-bottom: 0;
    margin-right: 20px;
    width: 220px;
  }
  @include mq(desktop){
    margin-right: 31px;
  }
  
}
</style>