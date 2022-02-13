<template>
  <div class="footer">
    <div class="footer__icon" @click="$emit('toggle-input')">
      <span class="material-icons">dashboard</span>
      <span class="footer__icon-title">add new spec</span>
    </div>
    <div class="footer__icon" @click="$emit('toggle-settings')">
      <span class="material-icons material-icons--disabled">save</span>
      <span class="footer__icon-title">save project</span>
    </div>
    <div class="footer__icon" @click="$emit('toggle-settings')">
      <span class="material-icons">settings</span>
      <span class="footer__icon-title">customize</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>
