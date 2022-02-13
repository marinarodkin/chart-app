<template>
  <div class="header">
    <div class="header__icon" @click="$emit('toggle-menu')">
      <span class="material-icons">menu</span>
    </div>
    <div class="header__icon" @click="$emit('toggle-menu')">
      <span class="material-icons material-icons--disabled">person_outline</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>
