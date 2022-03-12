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
      <div class="input-window__item" @click="$emit('hide-all')">
          <span class="material-icons">
          arrow_drop_down
          </span>
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
    <Inputs v-if="pipeSpecsVisible" :current-input="currentInput" @input-data="setInputData($event)" :pipeSpecsGroups="inputGroups" @hide-input="hideInput($event)" @imperial-system="handleSwitchImperialSystem" :widthClass ="inputWidthClass" :imperialSystem="imperialSystem"/>
    <SingleLoadsInputs v-if="singleLoadsVisible" :current-input="currentSingleInput" :singleLoadsGroups="singleLoadsGroups" @hide-single-load="hideSingleLoad($event)" @single-loads-data="setSingleLoads($event)" @imperial-system="handleSwitchImperialSystem" :imperialSystem="imperialSystem"/>
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
      currentInput: {},
      currentSingleInput: {},
      singleLoadsVisible: false,
      scale: 12,
      imperialSystem: true,
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
        },
        {
          id: 'input-group5',
          visible: false
        },
        {
          id: 'input-group6',
          visible: false
        },
        {
          id: 'input-group7',
          visible: false
        },
        {
          id: 'input-group8',
          visible: false
        },
        {
          id: 'input-group9',
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
      return this.inputGroups.filter(item => item.visible === true).length >= 10 && this.pipeSpecsVisible
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
        this.currentSingleInput = this.singleLoadsGroups.find(item => item.visible === false)
        if (this.currentSingleInput) {
          this.currentSingleInput.visible = true
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
      this.inputGroups.sort((a, b) => b.visible - a.visible)
      console.log(this.inputGroups)
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
      //this.$set(this.selectedProducts, 0, { ...this.selectedProducts[0], orderUnitOptions: this.orderUnitOptionsDefault })

      this.$emit('input-data', this.inputGroups)
    },
    setSingleLoads(event) {
      const currentInputData = this.singleLoadsGroups.find(data => data.id === event.id)
      currentInputData.data = event.data
      this.$emit('single-loads-data', this.singleLoadsGroups)
    },
    clearAll() {
      // remove data from items
      this.inputGroups = this.inputGroups.map((item) => {
        return {
          id: item.id,
          visible: item.visible
        }
      })
      this.singleLoadsGroups = this.singleLoadsGroups.map((item) => {
        return {
          id: item.id,
          visible: item.visible
        }
      })
      this.$emit('input-data', this.inputGroups)
      this.$emit('single-loads-data', this.singleLoadsGroups)
    },
    handleSwitchImperialSystem(event) {
      this.imperialSystem = event
      this.$emit('imperial-system', this.imperialSystem)
      this.clearAll()
    }
  }
}
</script>
