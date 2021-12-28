<template>
  <div class="input-wrapper">
    <form class="">
      <div class="">
        <div class="input-row" style="border: none;">
          <input v-model="firstItem.outsideDiameter" @change="sendProperties($event)"  id="outside-diameter1" type="text" class="input-item">
          <input v-model="secondItem.outsideDiameter" @change="sendProperties($event)"  id="outside-diameter2" type="text" class="input-item">
          <input v-model="thirdItem.outsideDiameter" @change="sendProperties($event)"  id="outside-diameter3" type="text" class="input-item">
        </div>
        <div class="input-row">
          <input v-model="firstItem.insideDiameter" @change="sendProperties($event)"  id="inside-diameter1" type="text" class="input-item">
          <input  v-model="secondItem.insideDiameter" @change="sendProperties($event)"  id="inside-diameter2" type="text" class="input-item">
          <input  v-model="thirdItem.insideDiameter" @change="sendProperties($event)"  id="inside-diameter3" type="text" class="input-item" >
        </div>
        <div class="input-row">
          <input v-model="firstItem.yieldStress" @change="sendProperties($event)"  id="yieldStress1" type="text" class="input-item" >
          <input  v-model="secondItem.yieldStress" @change="sendProperties($event)"  id="yieldStress2" type="text" class="input-item input-item" >
          <input  v-model="thirdItem.yieldStress" @change="sendProperties($event)"  id="yieldStress3" type="text" class="input-item input-item" >
        </div>
        <div class="input-row">
          <span class="value-item" style="padding-bottom: 18px;">Axial Scale</span>
          <input v-model="scale" @change="sendProperties($event)"  id="scale123" type="text" class="input-item">
        </div>
      </div>
    </form>
  </div>
</template>

<script>


export default {
  name: 'Inputs',
  props: {
    msg: String
  },
  data () {
    return {
      firstItem: {
        outsideDiameter: '10',
        insideDiameter: '9.5',
        yieldStress: '90000'
      },
      secondItem: {
        outsideDiameter: '',
        insideDiameter: '',
        yieldStress: ''
      },
      thirdItem: {
        outsideDiameter: '',
        insideDiameter: '',
        yieldStress: ''
      },
      scale: 12000
    }
  },
  mounted () {
    // eslint-disable-next-line no-self-assign
   // this.sendProperties('start')
  },
  methods: {
    sendProperties(event) {
      const props = {}
      // eslint-disable-next-line no-debugger
      console.log('this.toNumber(this.scale)', this.toNumber(this.scale))
      console.log('this.toNumber(this.scale)', this.toNumber(this.scale))
      if (this.toNumber(this.scale)) {
        if ((event === 'start' || event.target?.id?.includes('1')) && this.toNumber(this.firstItem.insideDiameter) && this.toNumber(this.firstItem.outsideDiameter) && this.toNumber(this.firstItem.yieldStress)) {
          props.number = 1,
              props.outsideDiameter = this.toNumber(this.firstItem.outsideDiameter),
              props.insideDiameter = this.toNumber(this.firstItem.insideDiameter),
              props.yieldStress = this.toNumber(this.firstItem.yieldStress),
              props.scale = this.toNumber(this.scale)
          console.log('emit')
          this.$emit('props', props)
        }
        if (event.target?.id?.includes('2') && this.toNumber(this.secondItem.insideDiameter) && this.toNumber(this.secondItem.outsideDiameter) && this.toNumber(this.secondItem.yieldStress)) {
          props.number = 2,
              props.outsideDiameter = this.toNumber(this.secondItem.outsideDiameter),
              props.insideDiameter = this.toNumber(this.secondItem.insideDiameter),
              props.yieldStress = this.toNumber(this.secondItem.yieldStress),
              props.scale = this.toNumber(this.scale)
          console.log('emit')
          this.$emit('props', props)
        }
        if (event.target?.id?.includes('3') && this.toNumber(this.thirdItem.insideDiameter) && this.toNumber(this.thirdItem.outsideDiameter) && this.toNumber(this.thirdItem.yieldStress)) {
          props.number = 3,
              props.outsideDiameter = this.toNumber(this.thirdItem.outsideDiameter),
              props.insideDiameter = this.toNumber(this.thirdItem.insideDiameter),
              props.yieldStress = this.toNumber(this.thirdItem.yieldStress),
              props.scale = this.toNumber(this.scale)
          console.log('emit')
          this.$emit('props', props)
        }
      }

    },
    toNumber(value) {
      const num = value * 1
      return (!isNaN((num)) && num > 0) ? num : undefined
    }
    }
}
</script>

<style lang="scss">
@import "index";

.input-wrapper {
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1000px;
  margin: 0 auto;
}
.title-row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin-bottom: 10px;
}
.title {
  width: 20%;
  max-width: 20%;
}

.title-start {
  width: 40%;
  max-width: 40%;
}

.title-first {
  color: $colorInput;
}

.title-second {
  color: orange;
}

.title-third {
  color: green;
}

.input-row {
  display: flex;
  flex-wrap: nowrap;
  max-height: 40px;
}

.input-item {
  width: 20%;
  max-width: 20%;
  max-height: 42px;
  padding: 5px;
  margin: 5px;
  outline: none;
  border: 1px solid grey;
  border-radius: 4px
}

.value-item {
  width: 40%;
  max-width: 40%;
  margin: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 500;
  padding-right: 10px;
  text-align: right;
}

.clear {
  width: 40%;
  max-width: 40%;
  text-align: right;
  padding-top: 10px;
}

.clear-link {
  text-decoration: none;
  font-weigth: 500;
}

@media (max-width: 500px) {
  .input-wrapper {
    padding-left: 2px;
    padding-right: 2px;
  }

  .value-item {
    font-size: 12px;
    padding-top: 0;
    padding-bottom: 5px;
    padding-right: 0;
  }
}
</style>
