<template>
  <p class="UIError">{{ $t('UIError.text') }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UIError',
})
</script>

<style lang="scss" scoped>
.UIError {
  display: flex;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: $cl-red-pastel;

  @include media('<=tablet') {
    font: $font-bold 24px/28px $font-rubik;
  }

  @include media('>=tablet') {
    font: $font-bold 28px/32px $font-rubik;
  }
}
</style>
