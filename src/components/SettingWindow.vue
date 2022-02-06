<template>
  <div class="setting-window">
  <div class="setting-window__menu" >
    <div class="setting-window__item" @click="showCustomizeEnvelope">
          <span class="material-icons">
          ads_click
          </span>
      select envelope
    </div>
    <div class="setting-window__item" @click="showSingleLoad">
          <span class="material-icons">
          ads_click
          </span>
      select single loads
    </div>
  </div>
    <CustomizeEnvelopes v-if="envelopsVisible" @input-data="setInputData($event)"/>
    <CustomizeSingleLoads v-if="singleLoadsVisible" />
  </div>
</template>

<script>
  import CustomizeEnvelopes from './CustomizeEnvelopes.vue'
  import CustomizeSingleLoads from './CustomizeSingleLoads.vue'

  export default {
  name: 'SettingWindow',
  components: {
    CustomizeEnvelopes, CustomizeSingleLoads
},
  props: {},
  data() {
  return {
  envelopsVisible: false,
  singleLoadsVisible: false
}
},
  methods: {
  showCustomizeEnvelope() {
    console.log('click showCustomizeEnvelope')
  this.singleLoadsVisible = false
  this.envelopsVisible = true
},
  showSingleLoad() {
    console.log('click showSingleLoad')
  this.singleLoadsVisible = true
  this.envelopsVisible = false
}
}
}
</script>
