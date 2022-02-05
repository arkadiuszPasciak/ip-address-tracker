<template>
  <div class="TrackerSearch">
    <UIInput
      class="tracker-input"
      name="search-ip"
      :placeholder="$t('TrackerSearch.input.placeholder')"
      v-model="valueInput"
      mask="ipAddress"
    />
    <UIButton
      class="tracker-button"
      :name="$t('TrackerSearch.button.name')"
      @click="getIPAddressData"
    >
      <template v-slot:icon-right>
        <UIIcon name="arrow" />
      </template>
    </UIButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UIButton from '@/components/UI/UIButton.vue'
import UIIcon from '@/components/UI/UIIcon.vue'
import UIInput from '@/components/UI/UIInput.vue'
import $store from '@/store/index'

export default defineComponent({
  name: 'Tracker',
  components: {
    UIButton,
    UIIcon,
    UIInput,
  },
  $store,
  setup() {
    const valueInput = ref('')

    function getIPAddressData(): void {
      if (valueInput.value !== '') {
        $store.state.IPApiService.getIPAddressData(valueInput.value)
      }
    }

    return {
      valueInput,
      getIPAddressData,
    }
  },
})
</script>

<style lang="scss" scoped>
.TrackerSearch {
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  margin: auto;
  overflow: hidden;
  border-radius: 13px;

  @include media('<=tablet') {
    max-width: 350px;
  }

  @include media('>=tablet') {
    max-width: 525px;
  }

  .tracker-input {
    width: 100%;

    @include media('<=tablet') {
      max-width: 300px;
    }

    @include media('>=tablet') {
      max-width: 450px;
    }
  }

  .tracker-button {
    width: 100%;

    @include media('<=tablet') {
      max-width: 50px;
    }

    @include media('>=tablet') {
      max-width: 75px;
    }
  }

  .tracker-input,
  .tracker-button {
    height: 100%;
  }
}
</style>
