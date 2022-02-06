<template>
  <div class="select">
    <Dropdown/>
  </div>
</template>

<script>
import Dropdown from 'vue-simple-search-dropdown';

export default {
  name: 'Select',
  components: {
    Dropdown
  },
  props: {
    options: {
      type: Array,
      default: () => [
          {
            id: 'name1',
            value: 'name1'
          },
          {
            id: 'name2',
            value: 'name2'
          },
          {
            id: 'name3',
            value: 'name3'
          }
        ]
      }
  },
  data() {
    return {}
  },
  methods: {
    selectDropdown() {
      console.log('select')
    }
  }
}

/*
<Dropdown
        :options="options"
        v-on:selected="selectDropdown"
        v-on:filter="selectDropdown"
        :disabled="false"
        name="projectNames"
        :maxItem="10"
        placeholder="Please select">
    </Dropdown>
 */
</script>

<style lang="scss">

</style>
