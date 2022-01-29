<template>
  <button class="UIButton" :class="modifier" type="button" :aria-label="name">
    <slot name="icon-left"></slot>
    <slot name="text"></slot>
    <slot name="icon-right"></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UIButton',
  props: {
    name: {
      type: String,
      required: true,
    },
    modifier: {
      type: String,
      default: 'primary',
    },
  },
})
</script>

<style lang="scss" scoped>
.UIButton {
  padding: 5px;

  @include hover(hover) {
    cursor: pointer;
  }

  &.primary {
    background-color: $cl-black;
    color: $cl-white;

    @include hover(hover) {
      transition: background-color 0.3s ease-in-out;
    }

    &:hover {
      @include hover(hover) {
        background-color: $cl-gray-light;
      }
    }
  }
}
</style>
