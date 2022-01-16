<template>
  <div class="Tracker">
    <h1 class="title">Tracker title</h1>
    <TrackerSearch />
    <TrackerTable />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TrackerSearch from '@/components/Tracker/TrackerSearch.vue'
import TrackerTable from '@/components/Tracker/TrackerTable.vue'

export default defineComponent({
  name: 'Tracker',
  components: {
    TrackerSearch,
    TrackerTable,
  },
})
</script>

<style lang="scss" scoped>
.Tracker {
  background: linear-gradient(0.8turn, $cl-red-pastel, $cl-purple-light);

  @include media('<=tablet') {
    padding: 10px;
  }

  @include media('>=tablet') {
    position: relative;
    height: 100vh;
    padding: 25px;
  }

  .title {
    color: $cl-white;
    text-align: center;

    @include media('<=tablet') {
      margin-bottom: 15px;
      font: $font-bold 24px/28px $font-rubik;
    }

    @include media('>=tablet') {
      margin-bottom: 30px;
      font: $font-bold 32px/36px $font-rubik;
    }
  }
}
</style>
