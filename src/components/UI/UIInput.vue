<template>
  <input
    class="UIInput"
    :class="modifier"
    :name="name"
    type="text"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UIInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    modifier: {
      type: String,
      default: 'primary',
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.UIInput {
  padding: 12px;
  letter-spacing: 0.8px;

  &::placeholder {
    transition: opacity 0.3s ease-in-out;
  }

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }

  @include media('<=tablet') {
    &,
    &::placeholder {
      font: $font-medium 13px/20px $font-rubik;
    }
  }

  @include media('>=tablet') {
    &,
    &::placeholder {
      font: $font-medium 17px/21px $font-rubik;
    }
  }

  &.primary {
    background-color: $cl-white;

    &,
    &::placeholder {
      color: $cl-gray-light;
    }
  }
}
</style>
