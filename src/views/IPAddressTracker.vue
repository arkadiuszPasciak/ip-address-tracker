<template>
  <div class="IPAddressTracker">
    <Tracker />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tracker from '@/components/Tracker/Tracker.vue'

export default defineComponent({
  name: 'IPAddressTracker',
  components: {
    Tracker,
  },
})
</script>
