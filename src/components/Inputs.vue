<template>
  <div class="input-wrapper">
    <form class="input-wrapper__form">
      <div class="input-wrapper__wrapper">
        <Swiper :options="swiperOptions" :key="swiperOptions.slidesPerView" ref="inputsSwiper">
      <SwiperSlide v-for="(item, $index) in pipeSpecsGroups" :key="item + $index" class="">
          <InputColumn v-show="item.visible" :ref="item.id" :id="item.id" :data="item.data" @props="setProps($event)" @hide-input="hideInput($event)" :imperialSystem="imperialSystem"/>
      </SwiperSlide>
        </Swiper>
      </div>
    </form>
    <div class="input-wrapper__switch">
      <SwitchInput :label="'metric'" :label2="'imperial'" @switch-toggle="switchSystem"/>
    </div>
  </div>
</template>

<script>

import InputColumn from "./InputColumn";
import SwitchInput from "./SwitchInput";
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Inputs',
  components: {
    InputColumn, SwitchInput, Swiper, SwiperSlide
  },
  props: {
    pipeSpecsGroups: [],
    widthClass: {
      type: String,
      default: 'width1'
    },
    imperialSystem: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      inputData: {},
      swiperOptions : {
        slidesPerView: 3,
        spaceBetween: 15,
        freeMode: true,
        centeredSlides: true,
        loop: false,
        visiblePipeSpecsGroups: []
      }
    }
  },
  watch: {
    currentInput: {
      deep: true,
      handler() {
        if (this.$refs.inputsSwiper.$swiper && this.currentInput.id) {
          const currentSlideIndex = this.currentInput.id.substr(this.currentInput.id.length -1, 1)
          console.log('currentSlideIndex', currentSlideIndex)
          this.$refs.inputsSwiper.$swiper.slideTo(currentSlideIndex)
        }
      }
    },
  },
  mounted () {
    this.handleSlidesProView()
  },
  created() {
    window.addEventListener("resize", this.handleSlidesProView);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleSlidesProView);
  },
  methods: {
    hideInput (event) {
      this.$emit('hide-input', event)
    },
    setProps(inputItem) {
      console.log('setProps in input', inputItem)
      this.$emit('input-data', inputItem)
    },
    handleSlidesProView () {
      const appWidth = document.documentElement.clientWidth
      // const inputRowWidth = 150
      // const inputMargin = 10
      let sliderProView = 3
      if (appWidth < 410) {
        sliderProView = 2
      } else if (appWidth > 411 && appWidth < 550 ) {
        sliderProView = 3
      } else if (appWidth > 551 && appWidth < 721 ) {
        sliderProView = 4
      } else if (appWidth > 721 && appWidth < 890 ) {
        sliderProView = 5
      } else if (appWidth > 891 && appWidth < 1000 ) {
        sliderProView = 6
      } else if (appWidth > 1001 && appWidth < 1200 ) {
        sliderProView = 7
      } else {
        sliderProView = 8
      }

      this.swiperOptions.slidesPerView = sliderProView
      window.setTimeout(() => {
        if (this.$refs.inputsSwiper.$swiper && this.currentInput.id) {
          const currentSlideIndex = this.currentInput.id.substr(this.currentInput.id.length -1, 1)
          this.$refs.inputsSwiper.$swiper.slideTo(currentSlideIndex)
        }
      },100)
    },
    switchSystem () {
      this.imperialSystem = !this.imperialSystem
      this.pipeSpecsGroups.forEach((elem) => {
        console.log('elem', elem)
        console.log('this.$refs[elem.id]', this.$refs[elem.id])
        this.$refs[elem.id][0].clearInputs()
      })
      this.$emit('imperial-system', this.imperialSystem)
    }
    }
}
</script>

<style lang="scss">
@import "index";

</style>
