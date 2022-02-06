<template>
  <div class="color-input">
    <div class="color-input__wrapper">
    <span>{{label}}</span>
    <div class="color-input__box" @click="palleteVisible=true"></div>
    </div>
    <div v-if="palleteVisible" class="color-input__palette">
      <div v-for="(item, $index) in palleteColors" :key="'color' + $index" :style="{backgroundColor: item.color}" class="color-input__color" :id="item.color">
    </div>
    </div>
    <div v-if="palleteVisible" class="color-input__palette-overlay" @click="palleteVisible=false">
    </div>
  </div>
</template>

<script>

export default {
  name: 'ColorInput',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      palleteVisible: false,
      palleteColors: [
        {
          name: 'blau',
          color: 'blau'
        },
        {
          name: 'red',
          color: 'red'
        },
        {
          name: 'green',
          color: 'green'
        },
        {
          name: 'yellow',
          color: 'yellow'
        },
        {
          name: 'pink',
          color: 'pink'
        },
        {
          name: 'blau',
          color: 'blau'
        },
        {
          name: 'red',
          color: 'red'
        },
        {
          name: 'green',
          color: 'green'
        },
        {
          name: 'yellow',
          color: 'yellow'
        },
        {
          name: 'pink',
          color: 'pink'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "index";

</style>
