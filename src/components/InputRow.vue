<template>
  <div class="input-row">
    <div class="input-row__icon-wrapper" @click="hideInput()">
      <span class="material-icons">close</span>
    </div>
    <div class="input-row__wrapper">
      <input v-model="name" @change="sendProperties($event)"  placeholder="name, (optional)" type="text" class="input-item">
      <input v-model="pressure" @change="sendProperties($event)" :placeholder="getPlaceholder('pressure', 'psi')" type="text" class="input-item">
      <div class="input-row__note">+ internal</div>
      <div class="input-row__note">- external</div>
      <input v-model="force" @change="sendProperties($event)"  :placeholder="getPlaceholder(placeholder='force', 'lbf')" type="text" class="input-item">
      <div class="input-row__note">+ tension</div>
      <div class="input-row__note">- compression</div>
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
    },
    data: {
      type: Object,
      default: () => {}
    },
    imperialSystem: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      name: '',
      pressure: '',
      force: ''
    }
  },
  mounted() {
    this.pressure = this.data && this.data.pressure ? this.data.pressure : ""
    this.force = this.data && this.data.force ? this.data.force : ""
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
    },
    getPlaceholder (placeholder, unit) {
      let convertedUnit = unit
      if (!this.imperialSystem) {
        if (unit === 'lbf') {
          convertedUnit = 'kN'
        }
        if (unit === 'psi') {
          convertedUnit = 'Mpa'
        }
      }
      return `${placeholder}, {${convertedUnit}}`
    }
  }
}
</script>
