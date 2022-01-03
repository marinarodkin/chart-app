<template>
  <div class="overlay" @click="$emit('hide-all')">
  </div>
</template>

<script>

export default {
  name: 'Overlay',
  props: {
    msg: String
  }
}
</script>
