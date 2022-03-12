<template>
  <div class="single-loads">
    <form class="single-loads__form">
      <div class="single-loads__wrapper">
        <Swiper :options="swiperOptions" :key="swiperOptions.slidesPerView" ref="singleLoadSwiper">
      <SwiperSlide v-for="(item, $index) in singleLoadsGroups" :key="item + $index" class="">
          <InputRow v-show="item.visible" :id="item.id" @props="setProps($event)" :data="item.data" @hide-input="hideInput($event)" :imperialSystem="imperialSystem"/>
      </SwiperSlide>
        </Swiper>
      </div>
    </form>
    <div class="single-loads__switch">
      <SwitchInput :label="'metric'" :label2="'imperial'" @switch-toggle="switchSystem"/>
    </div>
  </div>
</template>

<script>


import InputRow from "./InputRow";
import SwitchInput from "./SwitchInput";
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'SingleLoadsInput',
  components: {
    InputRow, SwitchInput, Swiper, SwiperSlide
  },
  props: {
    singleLoadsGroups: [],
    widthClass: {
      type: String,
      default: 'width1'
    },
    currentInput: {
      type: Object,
      default: () => {}
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
        centeredSlides: true,
        freeMode: true,
        loop: false
      }
    }
  },
  mounted () {
    this.handleSlidesProView()
    window.setTimeout(() => {
      if (this.$refs.singleLoadSwiper.$swiper && this.currentInput.id) {
        const currentSlideIndex = this.currentInput.id.substr(this.currentInput.id.length -1, 1)
        this.$refs.singleLoadSwiper.$swiper.slideTo(currentSlideIndex)
      }
    },100)
  },
  watch: {
    currentInput: {
      deep: true,
      handler() {
        console.log('this.currentInput', this.currentInput)
        if (this.$refs.singleLoadSwiper.$swiper && this.currentInput.id) {
          const currentSlideIndex = this.currentInput.id.substr(this.currentInput.id.length -1, 1)
          console.log('currentSlideIndex', currentSlideIndex)
          this.$refs.singleLoadSwiper.$swiper.slideTo(currentSlideIndex)
        }
      }
    },
  },
  created() {
    window.addEventListener("resize", this.handleSlidesProView);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleSlidesProView);
  },
  methods: {
    hideInput (event) {
      this.$emit('hide-single-load', event)
    },
    setProps(inputItem) {
      this.$emit('single-loads-data', inputItem)
    },
    switchSystem () {
      this.imperialSystem = !this.imperialSystem
      console.log('switchSystem (), this.imperialSystem', this.imperialSystem)
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
      console.log('appWidth, sliderProView', appWidth, sliderProView)

      this.swiperOptions.slidesPerView = sliderProView
    }
    }
}
</script>

<style lang="scss">
@import "index";

</style>
