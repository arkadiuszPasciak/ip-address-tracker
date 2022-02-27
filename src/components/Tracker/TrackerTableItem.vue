<template>
  <li class="TrackerTableItem">
    <h2 class="title">{{ title }}</h2>
    <p class="text">{{ text }}</p>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TrackerTableItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
$border-line: 1px solid $cl-gray-light;

.TrackerTableItem {
  @include media('<=tablet') {
    padding: 15px 0 10px;
    margin: 0 20px;
  }

  @include media('>=tablet', '<=desktop') {
    padding: 30px 40px;
  }

  @include media('>=desktop') {
    padding: 0 40px;
    margin: 30px 0;
  }

  &:not(:last-child) {
    @include media('<=tablet') {
      border-bottom: $border-line;
    }

    @include media('>=desktop') {
      border-right: $border-line;
    }
  }

  .title {
    font: $font-bold 13px/16px $font-rubik;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: $cl-gray-light;

    @include media('<=tablet') {
      margin-bottom: 5px;
      font: $font-bold 10px/13px $font-rubik;
    }

    @include media('>=tablet') {
      margin-bottom: 10px;
      font: $font-bold 13px/16px $font-rubik;
    }
  }

  .text {
    color: $cl-black;

    @include media('<=tablet') {
      font: $font-medium 20px/24px $font-rubik;
    }

    @include media('>=tablet') {
      font: $font-medium 24px/28px $font-rubik;
    }
  }
}
</style>
