<template>
  <div class="input-column">
    <div class="input-column__icon-wrapper" @click="hideInput()">
      <span class="material-icons">close</span>
    </div>
    <div class="input-column__wrapper">
      <input v-model="name" @change="sendProperties($event)"  placeholder="name, {optional}" type="text" class="input-item">
      <input v-model="outsideDiameter" @change="sendProperties($event)"  placeholder="outsideDiameter, {in}" type="text" class="input-item">
      <input v-model="insideDiameter" @change="sendProperties($event)"  placeholder="insideDiameter, {in}" type="text" class="input-item">
      <input v-model="yieldStress" @change="sendProperties($event)"   placeholder="yield strength, {ksi}" type="text" class="input-item">
      <input v-model="minThickness" @change="sendProperties($event)"   placeholder="min thickness, {%}" type="text" class="input-item">
      <input v-model="safetyFactor" @change="sendProperties($event)"   placeholder="safety factor" type="text" class="input-item">
      <input v-model="corrAllow" @change="sendProperties($event)"   placeholder="corrAllow" type="text" class="input-item">
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
      name: '',
      outsideDiameter: '',
      insideDiameter: '',
      yieldStress: '',
      minThickness: '',
      safetyFactor: '',
      corrAllow: ''
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
            name: this.name,
            outsideDiameter: this.outsideDiameter,
            insideDiameter: this.insideDiameter,
            yieldStress: this.yieldStress,
            safetyFactor: this.safetyFactor,
            minThickness: this.minThickness,
            corrAllow: this.corrAllow
          }
        }
        this.$emit('props', props)
      }
    },
    hideInput () {
      this.name = ''
      this.outsideDiameter = ''
      this.insideDiameter = ''
      this.yieldStress = ''
      this.minThickness = ''
      this.safetyFactor =  ''
      this.corrAllow = ''
      // this.$emit('props', {})
      this.$emit('hide-input', this.id)
    }
  }
}
</script>
