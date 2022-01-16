<template>
  <div class="TrackerMap">
    <GoogleMap />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GoogleMap from '@/components/GoogleMap/GoogleMap.vue'

export default defineComponent({
  name: 'TrackerMap',
  components: {
    GoogleMap,
  },
})
</script>

<style lang="scss" scoped>
.TrackerMap {
  @include media('<=tablet') {
    margin: -25px -10px -10px;
    height: 400px;
    width: calc(100% + 20px);
  }

  @include media('>=tablet') {
    position: absolute;
    bottom: 0;
    margin: 0 -25px;
    height: 60%;
    width: 100%;
  }
}
</style>
