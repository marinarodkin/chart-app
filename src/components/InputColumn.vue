<template>
  <div class="input-column">
    <div class="input-column__icon-wrapper" @click="hideInput()">
      <span class="material-icons">close</span>
    </div>
    <div class="input-column__wrapper">
      <input v-model="outsideDiameter" @change="sendProperties($event)"  placeholder="outsideDiameter, (in)" type="text" class="input-item">
      <input v-model="insideDiameter" @change="sendProperties($event)"  placeholder="insideDiameter, (in)" type="text" class="input-item">
      <input v-model="yieldStress" @change="sendProperties($event)"   placeholder="yield strength, (ksi)" type="text" class="input-item">
      <input v-model="minThickness" @change="sendProperties($event)"   placeholder="min thickness, (%)" type="text" class="input-item">
      <input v-model="safetyFactor" @change="sendProperties($event)"   placeholder="safety factor" type="text" class="input-item">
    </div>
  </div>
</template>

<script>

export default {
  name: 'InputColumn',
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
      outsideDiameter: '',
      insideDiameter: '',
      yieldStress: '',
      minThickness: '',
      safetyFactor: ''
    }
  },
  computed: {
    isDataComplete () {
      return this.outsideDiameter !== '' && this.insideDiameter !== '' && this.yieldStress !== ''
    }
  },
  methods: {
    sendProperties() {
      if (this.isDataComplete) {
        const props = {
          id: this.id,
          data: {
            outsideDiameter: this.outsideDiameter,
            insideDiameter: this.insideDiameter,
            yieldStress: this.yieldStress,
            safetyFactor: this.safetyFactor,
            minThickness: this.minThickness,
            scale: 12000
          }
        }
        this.$emit('props', props)
      }
    },
    hideInput () {
      this.outsideDiameter = ''
      this.insideDiameter = ''
      this.yieldStress = ''
      this.minThickness = ''
      this.safetyFactor =  ''
      // this.$emit('props', {})
      this.$emit('hide-input', this.id)
    }
  }
}
</script>
