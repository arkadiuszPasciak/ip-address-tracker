<template>
  <div class="GoogleMap" ref="map"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'GoogleMap',
  setup() {
    const root = ref(null)

    return {
      root,
    }
  },
})
</script>

<style lang="scss" scoped>
.GoogleMap {
  width: 100%;
  height: 100%;
}
</style>
