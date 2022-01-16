<template>
  <ul class="TrackerTable">
    <ul title="TrackerTable.title.address" text="192.212.174.101" />
    <ul title="TrackerTable.title.location" text="Brooklyn, USA" />
    <ul title="TrackerTable.title.timezone" text="UTC -05:00" />
    <ul title="TrackerTable.title.isp" text="SpaceX Starlink" />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TrackerTable',
})
</script>

<style lang="scss" scoped>
@mixin line($position: 'vertical') {
  content: '';
  position: absolute;
  background: $cl-gray-light;

  @if $position == 'vertical' {
    top: 25px;
    left: 50%;
    width: 1px;
    height: calc(100% - 50px);
  }

  @if $position == 'horizontal' {
    top: 50%;
    left: 25px;
    width: calc(100% - 50px);
    height: 1px;
  }
}

.TrackerTable {
  display: grid;
  overflow: hidden;
  position: relative;
  z-index: 2;
  border-radius: 20px;
  width: 100%;
  background: $cl-white;

  &::before {
    @include media('>=tablet', '<=desktop') {
      @include line($position: 'vertical');
    }
  }

  &::after {
    @include media('>=tablet', '<=desktop') {
      @include line($position: 'horizontal');
    }
  }

  @include media('<=tablet') {
    grid-template-columns: auto;
    grid-template-rows: repeat(4, 75px);
    padding: 10px 0;
    max-width: 425px;
    top: 40px;
    margin: 0 auto;
  }

  @include media('>=tablet') {
    z-index: 2;
    margin: 30px auto;
  }

  @include media('>=tablet', '<=desktop') {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 135px);
    max-width: 800px;
    top: 65px;
  }

  @include media('>=desktop') {
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 175px;
    max-width: 1200px;
    top: 100px;
  }
}
</style>
