<template>
  <div class="menu">
    <div class="menu__header-wrapper">
      <div class="header__icon" @click="$emit('toggle-menu')">
        <span class="material-icons">close</span>
      </div>
      <div class="menu__header"> Oil and gas Calculator</div>
    </div>
    <div class="menu__main">
      main menu
    </div>
    <div class="menu__bottom">
      bottom menu
    </div>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>
