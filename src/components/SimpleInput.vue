<template>
  <div class="simple-input">
    <label class="simple-input__label">{{ label }}</label>
    <input v-model="value" placeholder="0" type="text" class="simple-input__input">
  </div>
</template>

<script>

export default {
  name: 'SimpleInput',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      value: 0
    }
  }
}
</script>

<style lang="scss">

</style>
