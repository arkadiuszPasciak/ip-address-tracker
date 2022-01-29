<template>
  <div class="UILoader">
    <span class="animation"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UILoader',
})
</script>

<style lang="scss" scoped>
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.UILoader {
  display: flex;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .animation {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 80px;
    height: 80px;
    margin: 8px;
    border: 8px solid $cl-purple-light;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: $cl-purple-light transparent transparent transparent;
    animation-delay: -0.45s;
  }
}
</style>
