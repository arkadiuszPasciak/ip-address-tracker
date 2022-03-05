<template>
  <ul class="TrackerTable">
    <UILoader v-if="state.isLoading" />

    <UIError v-else-if="state.isError" class="error" />

    <template v-else-if="state.address">
      <TrackerTableItem
        :title="$t('TrackerTable.title.ipAddress')"
        :text="state.address?.query ?? $t('TrackerTable.text.unknown')"
      />
      <TrackerTableItem
        :title="$t('TrackerTable.title.location')"
        :text="
          `${state.address?.city}, ${state.address?.country}` ??
          $t('TrackerTable.text.unknown')
        "
      />
      <TrackerTableItem
        :title="$t('TrackerTable.title.timezone')"
        :text="state.address?.timezone ?? $t('TrackerTable.text.unknown')"
      />
      <TrackerTableItem
        :title="$t('TrackerTable.title.isp')"
        :text="state.address?.isp ?? $t('TrackerTable.text.unknown')"
      />
    </template>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import TrackerTableItem from '@/components/Tracker/TrackerTableItem.vue'
import UIError from '@/components/UI/UIError.vue'
import UILoader from '@/components/UI/UILoader.vue'
import $store from '@/store/index'

export default defineComponent({
  name: 'TrackerTable',
  components: {
    TrackerTableItem,
    UIError,
    UILoader,
  },
  $store,
  setup() {
    const state = ref({
      isError: false,
      isLoading: true,
      address: $store.state.IPApiService.state.ipAddressData,
    })

    watch($store.state.IPApiService, (value) => {
      state.value.isError = false
      state.value.isLoading = true

      if (value.state.ipAddressData) {
        state.value.address = value.state.ipAddressData
      }

      if (value.state.isError) {
        state.value.isError = true
      }

      state.value.isLoading = false
    })

    return {
      state,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/utils/_mixins.scss';

.TrackerTable {
  display: grid;
  overflow: hidden;
  position: relative;
  z-index: 2;
  border-radius: 20px;
  width: 100%;
  background-color: $cl-white;

  &::before {
    @include media('>=tablet', '<desktop') {
      @include line($position: 'vertical');
    }
  }

  &::after {
    @include media('>=tablet', '<desktop') {
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

  .error {
    color: $cl-black;
  }
}
</style>
