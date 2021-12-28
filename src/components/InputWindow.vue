<template>
  <div class="input-window">
    <div class="input-window__menu">
      <div class="input-window__item">
          <span class="material-icons">
          add
          </span>
          add pipe specs
      </div>
      <div class="input-window__item">
          <span class="material-icons">
          add
          </span>
        add single loads
      </div>
    </div>
    <Inputs @props="$emit('set-props')"/>
  </div>
</template>

<script>
import Inputs from './Inputs.vue'

export default {
  name: 'InputWindow',
  components: {
    Inputs
  },
  props: {
    msg: String
  }
}
</script>
