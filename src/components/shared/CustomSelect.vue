<template>
  <select v-on="listeners" class="custom-select">
    <option 
      v-for="item in formattedItems" 
      :key="item?.value" 
      :value="item?.value" >
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
.custom-select {
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-accent-color;
  font-size: 18px;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  display: inline-block;
}
</style>