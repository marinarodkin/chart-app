<template>
  <div class="customize-envelope">
    <Select label="label"/>
    <div class="customize-envelope__wrapper">
      <div class="customize-envelope__title">customize</div>
      <SwitchInput :label="'show load case'"/>
      <ColorInput label="marker color" class="customize-envelope__padding-left"/>
      <SimpleInput label="marker size, (px)" class="customize-envelope__padding-left"/>
      <SwitchInput :label="'show critical vertices'" class="customize-envelope__padding-left"/>
      <SwitchInput :label="'show loadname'"/>
    </div>
    <div class="customize-envelope__connection-wrapper">
      <div class="customize-envelope__title">connections</div>
      <div class="customize-envelope__connections">
        <div class="customize-envelope__connections-left">
          <div class="customize-envelope__connections-selector customize-envelope__connections-selector--first">name 1</div>
          <div class="customize-envelope__line"></div>
          <div class="customize-envelope__connections-selector ">name 2</div>
        </div>
        <div class="customize-envelope__connections-right">
          <div class="customize-envelope__select-load">
            <span class="material-icons">
                ads_click
            </span>
                select loads to connect with
          </div>
        </div>
      </div>
      <ColorInput label="line color" class="customize-envelope__padding-left"/>
      <SimpleInput label="width, (px)" class="customize-envelope__padding-left"/>
      <LineTypeInput label="dashes" class="customize-envelope__padding-left"/>
    </div>
  </div>
</template>

<script>

import SimpleInput from "./SimpleInput";
import ColorInput from "./ColorInput";
import LineTypeInput from "./LineTypeInput";
import SwitchInput from "./SwitchInput";
import Select from "./Select";

export default {
  name: 'CustomizeEnvelope',
  components: {
    SimpleInput,ColorInput, SwitchInput, Select, LineTypeInput
  },
  props: {
  },
  data() {
    return {
      label: 'show envelope'
    }
  }
}
</script>

<style lang="scss">
@import "index";

</style>
