<template>
  <div class="customize-envelope">
    <Select label="label"/>
    <div class="customize-envelope__wrapper">
      <div class="customize-envelope__title">customize</div>
    <SwitchInput :label="'show envelope'"/>
      <ColorInput label="line color" class="customize-envelope__padding-left"/>
      <SimpleInput label="width, (px)" class="customize-envelope__padding-left"/>
      <LineTypeInput label="dashes" class="customize-envelope__padding-left"/>
      <SwitchInput :label="'show critical vertices'" class="customize-envelope__padding-left"/>
      <SwitchInput :label="'show extra point'"/>
      <SimpleInput label="tension, (%)" class="customize-envelope__padding-left"/>
      <SimpleInput label="tension, (%)" class="customize-envelope__padding-left"/>
      <SimpleInput label="compression, (%)" class="customize-envelope__padding-left"/>
      <SimpleInput label="compression, (%)" class="customize-envelope__padding-left"/>
      <SwitchInput :label="'capped ends'"/>
      <ColorInput label="line color" class="customize-envelope__padding-left"/>
      <SimpleInput label="width, (px)" class="customize-envelope__padding-left"/>
      <LineTypeInput label="dashes" class="customize-envelope__padding-left"/>
      <SwitchInput :label="'show markers'" class="customize-envelope__padding-left"/>
      <SwitchInput :label="'show labels'" class="customize-envelope__padding-left"/>
      <SwitchInput :label="'max. sheared stress criterion'"/>
      <SimpleInput label="width, (px)" class="customize-envelope__padding-left"/>
      <LineTypeInput label="dashes" class="customize-envelope__padding-left"/>
      <SwitchInput :label="'show markers'" class="customize-envelope__padding-left"/>
      <SwitchInput :label="'marker colors'" class="customize-envelope__padding-left"/>
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
