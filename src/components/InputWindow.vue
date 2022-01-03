<template>
  <div class="input-window">
    <div class="input-window__menu">
      <div class="input-window__item" v-show="!singleLoadsVisible" :class="pipeSpecsDisable ? 'input-window__item--disable' : ''" @click="addPipeSpec()">
          <span class="material-icons">
          add
          </span>
          add pipe specs
      </div>
      <div class="input-window__item" v-show="singleLoadsVisible" @click="showPipeSpec()">
          <span class="material-icons">
          east
          </span>
        to pipe specs
      </div>
      <div class="input-window__item" @click="addSingleLoad()" v-show="!pipeSpecsVisible">
          <span class="material-icons">
          add
          </span>
        add single loads
      </div>
      <div class="input-window__item" v-show="pipeSpecsVisible" @click="showSingleLoad()">
          <span class="material-icons">
          east
          </span>
        to single loads
      </div>
    </div>
    <Inputs v-if="pipeSpecsVisible" @input-data="setInputData($event)" :pipeSpecsGroups="inputGroups" @hide-input="hideInput($event)" :widthClass ="inputWidthClass"/>
    <SingleLoadsInputs v-if="singleLoadsVisible" :singleLoadsGroups="singleLoadsGroups" @hide-single-load="hideSingleLoad($event)" @single-loads-data="setSingleLoads($event)"/>
    <div class="input-window__scale-input">
       <label for="scale">horisontal scale range</label>
       <input v-model="scale" @change="setScale($event)"  id="scale" placeholder="12" type="text" class="input-item">
    </div>
  </div>
</template>

<script>
import Inputs from './Inputs.vue'
import SingleLoadsInputs from './SingleLoadsInputs.vue'

export default {
  name: 'InputWindow',
  components: {
    Inputs, SingleLoadsInputs
  },
  props: {},
  data() {
    return {
      pipeSpecsVisible: false,
      currentInput: 0,
      singleLoadsVisible: false,
      scale: 12,
      inputGroups: [
        {
          id: 'input-group0',
          visible: true
        },
        {
          id: 'input-group1',
          visible: false
        },
        {
          id: 'input-group2',
          visible: false
        },
        {
          id: 'input-group3',
          visible: false
        },
        {
          id: 'input-group4',
          visible: false
        }
      ],
      singleLoadsGroups: [
        {
          id: 'single-load0',
          visible: true
        },
        {
          id: 'single-load1',
          visible: false
        },
        {
          id: 'single-load2',
          visible: false
        },
        {
          id: 'single-load3',
          visible: false
        },
        {
          id: 'single-load4',
          visible: false
        }
      ],
    }
  },
  computed: {
    inputWidthClass () {
      return 'width' + this.inputGroups.filter(item => item.visible === true).length
    },
    pipeSpecsDisable () {
      return this.inputGroups.filter(item => item.visible === true).length >= 5 && this.pipeSpecsVisible
    }
  },
  methods: {
    addPipeSpec() {
      if (this.singleLoadsVisible) {
        this.singleLoadsVisible = false
      }
      if (!this.pipeSpecsVisible) {
        this.pipeSpecsVisible = true
      } else  {
        this.currentInput = this.inputGroups.find(item => item.visible === false)
        if (this.currentInput) {
          this.currentInput.visible = true
        }
      }
    },
    showPipeSpec() {
      this.singleLoadsVisible = false
      this.pipeSpecsVisible = true
    },
    addSingleLoad() {
      console.log('add single')
      if (!this.singleLoadsVisible) {
        this.singleLoadsVisible = true
      } else  {
        this.currentInput = this.singleLoadsGroups.find(item => item.visible === false)
        if (this.currentInput) {
          this.currentInput.visible = true
        }
      }
      if (this.pipeSpecsVisible) {
        this.pipeSpecsVisible = false
      }
    },
    showSingleLoad() {
      this.singleLoadsVisible = true
      this.pipeSpecsVisible = false
    },
    hideInput(event) {
      const inputToHide = this.inputGroups.find(item => item.id === event)
      inputToHide.visible = false
      delete inputToHide.data
      this.$emit('input-data', this.inputGroups)
    },
    hideSingleLoad(event) {
      const singleLoadToHide = this.singleLoadsGroups.find(item => item.id === event)
      console.log('singleLoadToHide', singleLoadToHide)
      singleLoadToHide.visible = false
      delete singleLoadToHide.data
      this.$emit('single-loads-data', this.singleLoadsGroups)
    },
    setInputData(event) {
      const currentInputData = this.inputGroups.find(data => data.id === event.id)
      currentInputData.data = event.data
      this.$emit('input-data', this.inputGroups)
    },
    setSingleLoads(event) {
      const currentInputData = this.singleLoadsGroups.find(data => data.id === event.id)
      currentInputData.data = event.data
      this.$emit('single-loads-data', this.singleLoadsGroups)
    },
    setScale() {
      console.log('set-scale', this.scale)
      this.$emit('set-scale', this.scale)
    }
  }
}
</script>
