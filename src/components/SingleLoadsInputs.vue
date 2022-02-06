<template>
  <div class="single-loads">
    <form class="single-loads__form">
      <div class="single-loads__wrapper">
      <div v-for="(item, $index) in singleLoadsGroups" :key="item + $index" class="">
          <InputRow v-show="item.visible" :id="item.id" @props="setProps($event)" @hide-input="hideInput($event)"/>
      </div>
      </div>
    </form>
    <div class="single-loads__switch">
      <SwitchInput :label="'metric'" :label2="'imperial'"/>
    </div>
  </div>
</template>

<script>


import InputRow from "./InputRow";
import SwitchInput from "./SwitchInput";

export default {
  name: 'SingleLoadsInput',
  components: {
    InputRow, SwitchInput
  },
  props: {
    singleLoadsGroups: [],
    widthClass: {
      type: String,
      default: 'width1'
    }
  },
  data () {
    return {
      inputData: {}
    }
  },
  methods: {
    hideInput (event) {
      this.$emit('hide-single-load', event)
    },
    setProps(inputItem) {
      this.$emit('single-loads-data', inputItem)
    },
    }
}
</script>

<style lang="scss">
@import "index";

</style>
