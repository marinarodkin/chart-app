<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="collection col s3" style="border: none;">
          <div class="collection-item" style="margin-top: 32px;">Outside Diameter, inch</div>
          <div class="collection-item" style="padding-bottom: 18px;">Inside Diameter, inch</div>
          <div class="collection-item" style="padding-bottom: 18px;">YieldStress</div>
          <div class="collection-item" style="padding-bottom: 18px;">Axial Scale Range</div>
        </div>
        <div class="col s3">
          <span>Item 1</span>
          <input v-model="firstItem.outsideDiameter" @change="sendProperties($event)"  id="outside-diameter1" type="text" class="validate">
          <label for="outside-diameter1">outside-diameter</label>
          <input v-model="firstItem.insideDiameter" @change="sendProperties($event)"  id="inside-diameter1" type="text" class="validate">
          <label for="inside-diameter1">inside-diameter</label>
          <input v-model="firstItem.yieldStress" @change="sendProperties($event)"  id="yieldStress1" type="text" class="validate">
          <label for="yieldStress1">YieldStress</label>
          <input v-model="scale" @change="sendProperties($event)"  id="scale" type="text" class="validate">
          <label for="scale">Scale</label>
        </div>
        <div class="input-field col s3">
          <span>Item 2</span>
          <input v-model="secondItem.outsideDiameter" @change="sendProperties($event)"  id="outside-diameter2" type="text" class="validate">
          <input  v-model="secondItem.insideDiameter" @change="sendProperties($event)"  id="inside-diameter2" type="text" class="validate">
          <input  v-model="secondItem.yieldStress" @change="sendProperties($event)"  id="yieldStress2" type="text" class="validate">
        </div>
        <div class="input-field col s3">
          <span> Item 3</span>
          <input v-model="thirdItem.outsideDiameter" @change="sendProperties($event)"  id="outside-diameter3" type="text" class="validate">
          <input  v-model="thirdItem.insideDiameter" @change="sendProperties($event)"  id="inside-diameter3" type="text" class="validate">
          <input  v-model="thirdItem.yieldStress" @change="sendProperties($event)"  id="yieldStress3" type="text" class="validate">
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
  methods: {
    sendProperties(event) {
      const props = {}
      // eslint-disable-next-line no-debugger
      console.log('this.toNumber(this.scale)', this.toNumber(this.scale))
      console.log('this.toNumber(this.scale)', this.toNumber(this.scale))
      if (this.toNumber(this.scale)) {
        if (event.target.id.includes('1') && this.toNumber(this.firstItem.insideDiameter) && this.toNumber(this.firstItem.outsideDiameter) && this.toNumber(this.firstItem.yieldStress)) {
          props.number = 1,
              props.outsideDiameter = this.toNumber(this.firstItem.outsideDiameter),
              props.insideDiameter = this.toNumber(this.firstItem.insideDiameter),
              props.yieldStress = this.toNumber(this.firstItem.yieldStress),
              props.scale = this.toNumber(this.scale)
          console.log('emit')
          this.$emit('props', props)
        }
        if (event.target.id.includes('2') && this.toNumber(this.secondItem.insideDiameter) && this.toNumber(this.secondItem.outsideDiameter) && this.toNumber(this.secondItem.yieldStress)) {
          props.number = 2,
              props.outsideDiameter = this.toNumber(this.secondItem.outsideDiameter),
              props.insideDiameter = this.toNumber(this.secondItem.insideDiameter),
              props.yieldStress = this.toNumber(this.secondItem.yieldStress),
              props.scale = this.toNumber(this.scale)
          console.log('emit')
          this.$emit('props', props)
        }
        if (event.target.id.includes('3') && this.toNumber(this.thirdItem.insideDiameter) && this.toNumber(this.thirdItem.outsideDiameter) && this.toNumber(this.thirdItem.yieldStress)) {
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
