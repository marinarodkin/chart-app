<template>
  <div class="">
    Test
    <label class="switch__label">
      <input type="checkbox" class="switch__checkbox">
      <span class="switch__lever"></span>
    </label>
  </div>
</template>

<script>

export default {
  name: 'Switch',
  props: {
    msg: String
  }
}
</script>
