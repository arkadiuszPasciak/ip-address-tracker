<template>
  <input
    class="UIInput"
    :class="modifier"
    :name="name"
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    v-maska="maskInput"
    :maxlength="maxLength"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { masks, EMasks } from '@/utils/masks'

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
    modelValue: {
      type: String,
      default: '',
      required: true,
    },
    mask: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    let maskInput = null
    let maxLength = null

    if (props.mask === EMasks.IP_ADDRESS) {
      maskInput = masks.ipAddress
      maxLength = 15
    }

    return {
      maskInput,
      maxLength,
    }
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
