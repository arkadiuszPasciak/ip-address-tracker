<template>
  <IPAddressTracker />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IPAddressTracker from '@/views/IPAddressTracker.vue'

export default defineComponent({
  name: 'App',
  components: {
    IPAddressTracker,
  },
})
</script>
