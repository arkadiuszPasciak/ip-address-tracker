<template>
  <div class="Tracker">
    <h1 class="title">{{ $t('Tracker.title') }}</h1>
    <TrackerSearch />
    <TrackerTable />
    <TrackerMap />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import $store from '@/store/index'
import TrackerMap from '@/components/Tracker/TrackerMap.vue'
import TrackerSearch from '@/components/Tracker/TrackerSearch.vue'
import TrackerTable from '@/components/Tracker/TrackerTable.vue'

export default defineComponent({
  name: 'Tracker',
  components: {
    TrackerMap,
    TrackerSearch,
    TrackerTable,
  },
  $store,
  created() {
    $store.state.IPApiService.getIPAddressData('83.97.23.105')
  },
})
</script>

<style lang="scss" scoped>
.Tracker {
  background-color: $cl-black;

  @include media('<=tablet') {
    padding: 20px 10px;
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
      margin-bottom: 20px;
      font: $font-bold 24px/28px $font-rubik;
    }

    @include media('>=tablet') {
      margin-bottom: 30px;
      font: $font-bold 32px/36px $font-rubik;
    }
  }
}
</style>
