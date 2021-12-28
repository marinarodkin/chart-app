<template>
  <div id="app">
    <Header @toggle-menu="toggleMenu"/>
    <Menu @toggle-menu="toggleMenu" :class="showMenu ? 'menu--show' : 'menu--hidden'"/>
    <ChartContainer msg="Welcome to Chart"/>
    <InputWindow :class="showInputWindow ? 'input-window--show' : 'input-window--hidden'"/>
    <SettingWindow :class="showSettings ? 'setting-window--show' : 'setting-window--hidden'"/>
    <Overlay :class="showOverlay ? 'overlay--show' : 'overlay--hidden'"/>
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
    }
  }
}

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  border: 2px solid grey;
}
</style>
