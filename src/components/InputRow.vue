<template>
  <div class="input-row">
    <div class="input-row__wrapper">
      <input v-model="pressure" @change="sendProperties($event)"  placeholder="pressure, (psi)" type="text" class="input-item">
      <input v-model="force" @change="sendProperties($event)"  placeholder="force, (lbf)" type="text" class="input-item">
    </div>
    <div class="input-row__icon-wrapper" @click="hideInput()">
      <span class="material-icons">close</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'InputRow',
  props: {
    id: {
      type: String,
      default: ''
    },
    number: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      pressure: '',
      force: ''
    }
  },
  computed: {
    isDataComplete () {
      return this.pressure !== '' && this.force !== ''
    }
  },
  methods: {
    sendProperties() {
      if (this.isDataComplete) {
        const props = {
          id: this.id,
          data: {
            pressure: this.pressure,
            force: this.force,
            scale: 12000
          }
        }
        console.log('sendProperties()', props)
        this.$emit('props', props)
      }
    },
    hideInput () {
      this.pressure = ''
      this.force = ''
      this.$emit('hide-input', this.id)
    }
  }
}
</script>
