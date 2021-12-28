<template>
  <div class="footer">
    <div class="footer__icon" @click="$emit('toggle-input')">
      <span class="material-icons">dashboard</span>
    </div>
    <div class="footer__icon" @click="$emit('toggle-settings')">
      <span class="material-icons">settings</span>
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
