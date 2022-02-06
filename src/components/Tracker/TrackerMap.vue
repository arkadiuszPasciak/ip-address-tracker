<template>
  <div class="TrackerMap">
    <UILoader v-if="state.isLoading" />

    <UIError v-if="state.isError" />

    <div v-else class="map" ref="trackerMap"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, watch } from 'vue'
import $store from '@/store/index'
import {
  IGoogleMapsCoords,
  stylesMapSettings,
} from '@/services/GoogleMapsService/GoogleMapsSupport'
import UIError from '@/components/UI/UIError.vue'
import UILoader from '@/components/UI/UILoader.vue'

export default defineComponent({
  name: 'TrackerMap',
  components: {
    UIError,
    UILoader,
  },
  $store,
  setup() {
    const state = ref({
      isError: false,
      isLoading: true,
      latitude: $store.state.IPApiService.state.ipAddressData?.lat ?? null,
      longitude: $store.state.IPApiService.state.ipAddressData?.lon ?? null,
    })

    const trackerMap = ref()

    function initMap(coords: IGoogleMapsCoords, map: HTMLElement) {
      $store.state.GoogleMapsService.initGoogleMap(
        coords,
        map,
        stylesMapSettings
      )
    }

    watch($store.state.IPApiService, (value) => {
      state.value.isError = false
      state.value.isLoading = true

      if (value.state.ipAddressData !== null) {
        const geolocationCoords = {
          latitude: Number(value.state.ipAddressData.lat),
          longitude: Number(value.state.ipAddressData.lon),
        }

        nextTick(() => {
          initMap(geolocationCoords, trackerMap.value)
        })
      }

      if (value.state.isError === true) {
        state.value.isError = true
      }

      state.value.isLoading = false
    })

    return {
      state,
      trackerMap,
    }
  },
})
</script>

<style lang="scss" scoped>
.TrackerMap {
  background-color: rgba($cl-black, 0.6);

  @include media('<=tablet') {
    margin: -25px -10px -10px;
    height: 400px;
    width: calc(100% + 20px);
  }

  @include media('>=tablet') {
    position: absolute;
    bottom: 0;
    margin: 0 -25px;
    height: 60%;
    width: 100%;
  }

  .map {
    height: 100%;
    width: 100%;
  }
}
</style>
