<template>
  <div class="input-wrapper">
    <form class="input-wrapper__form">
      <div class="input-wrapper__wrapper" :class="widthClass">
      <div v-for="(item, $index) in pipeSpecsGroups" :key="item + $index" class="">
          <InputColumn v-show="item.visible" :id="item.id" @props="setProps($event)" @hide-input="hideInput($event)"/>
      </div>
      </div>
    </form>
    <div class="input-wrapper__switch">
    <SwitchInput :label="'metric'" :label2="'imperial'"/>
    </div>
  </div>
</template>

<script>

import InputColumn from "./InputColumn";
import SwitchInput from "./SwitchInput";

export default {
  name: 'Inputs',
  components: {
    InputColumn, SwitchInput
  },
  props: {
    pipeSpecsGroups: [],
    widthClass: {
      type: String,
      default: 'width1'
    }
  },
  data () {
    return {
      inputData: {},
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    }
  },
  mounted () {
    // eslint-disable-next-line no-self-assign
   // this.sendProperties('start')
  },
  methods: {
    hideInput (event) {
      this.$emit('hide-input', event)
    },
    setProps(inputItem) {
      console.log('setProps in input', inputItem)
      this.$emit('input-data', inputItem)
    },
    }
}
</script>

<style lang="scss">
@import "index";

</style>
