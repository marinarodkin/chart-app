<template>
  <div class="line-type-input">
    <div class="line-type-input__wrapper">
    <span>{{label}}</span>
    <div class="line-type-input__box" @click="palleteVisible=true">
      <div class="line-type-input__border"></div>
    </div>
    </div>
    <div v-if="palleteVisible" class="line-type-input__palette">
      <div v-for="(item, $index) in palleteLines" :key="'color' + $index" :style="{backgroundColor: item.color}" class="line-type-input__color" :id="item.color">
      <div class="line-type-input__color"></div>
      </div>
    </div>
    <div v-if="palleteVisible" class="line-type-input__palette-overlay" @click="palleteVisible=false">
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
          name: 'dash',
          color: 'dash'
        },
        {
          name: 'dot',
          color: 'dot'
        },
        {
          name: 'solid',
          color: 'solid'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "index";

</style>
