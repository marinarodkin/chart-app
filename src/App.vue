<template>
  <div id="app">
    <Header v-show="!showMenu" @toggle-menu="toggleMenu"/>
    <Menu @toggle-menu="toggleMenu" :class="showMenu ? 'menu--show' : 'menu--hidden'"/>
    <ChartContainer msg="Welcome to Chart" :inputData="inputData" :singleLoadsData="singleLoadsData" :scale="scale"/>
    <InputWindow :class="showInputWindow ? 'input-window--show' : 'input-window--hidden'" @input-data="setInputData($event)" @single-loads-data="setSingleLoadsData($event)" @set-scale="setScale($event)"/>
    <SettingWindow :class="showSettings ? 'setting-window--show' : 'setting-window--hidden'"/>
    <Overlay :class="showOverlay ? 'overlay--show' : 'overlay--hidden'" @hide-all="hideAll" />
    <Footer @toggle-input="toggleInputWindow" @toggle-settings="toggleSettings"/>
  </div>
</template>

<script>
import ChartContainer from './components/ChartContainer.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Menu from './components/Menu.vue'
import InputWindow from './components/InputWindow.vue'
import SettingWindow from './components/SettingWindow.vue'
import Overlay from './components/Overlay.vue'

export default {
  name: 'App',
  components: {
    ChartContainer, Header, Footer, Menu, InputWindow, SettingWindow, Overlay
  },
  data() {
    return {
      showMenu: false,
      showInputWindow: false,
      showSettings: false,
      inputData: [],
      singleLoadsData: [],
      scale: '12'
    }
  },
  computed: {
    showOverlay () {
      return this.showMenu || this.showInputWindow || this.showSettings
    }
  },
  methods: {
    toggleMenu() {
      this.showInputWindow = false
      this.showSettings = false
      this.showMenu = !this.showMenu
    },
    toggleInputWindow() {
      this.showMenu = false
      this.showSettings = false
      this.showInputWindow = !this.showInputWindow
    },
    toggleSettings() {
      this.showMenu = false
      this.showInputWindow = false
      this.showSettings = !this.showSettings
    },
    setInputData(event) {
      console.log('set Input Data')
      this.inputData = [...event]
      this.hideAll()
    },
    setSingleLoadsData(event) {
      console.log('setSingleLoadsData(event)', event)
      this.singleLoadsData = [...event]
    },
    hideAll() {
      this.showMenu = false
      this.showSettings = false
      this.showInputWindow = false
    },
    setScale(event) {
      this.scale = event
    }
  }
}

</script>

<style>


</style>
