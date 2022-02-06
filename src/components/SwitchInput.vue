<template>
  <div class="switch">
    <label class="switch__label">
      {{label}}
      <input type="checkbox" class="switch__checkbox">
      <div class="switch__lever"></div>
      {{label2}}
    </label>
  </div>
</template>

<script>

export default {
  name: 'SwitchInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    label2: {
      type: String,
      default: ''
    }
    }
}
</script>

<style lang="scss">
@import "index";

</style>
