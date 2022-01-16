<template>
  <i class="UIIcon" :class="name"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UIIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.UIIcon {
  display: block;
  margin: auto;

  &.arrow {
    width: 10px;
    height: 14px;
    mask: url('~@/assets/icons/svg/arrow.svg');
    background-color: $cl-white;
  }

  &.location {
    width: 46px;
    height: 57px;
    mask: url('~@/assets/icons/svg/location.svg');
    background-color: $cl-gray-dark;
  }
}
</style>
