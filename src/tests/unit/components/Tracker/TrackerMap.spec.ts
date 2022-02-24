import { mount } from '@vue/test-utils'
import TrackerMap from '@/components/Tracker/TrackerMap.vue'
import UILoader from '@/components/UI/UILoader.vue'
import UIError from '@/components/UI/UIError.vue'

const settings = {
  mainClass: 'TrackerMap',
}

const wrapper = mount(TrackerMap)

describe('[TrackerMap.vue]', () => {
  it('should have attributes', () => {
    expect(wrapper.attributes()).toEqual({
      class: settings.mainClass,
    })
  })

  it('should have loader', () => {
    wrapper.vm.state.isLoading = true
    wrapper.vm.state.isError = false

    expect(wrapper.findComponent(UILoader).exists()).toBe(true)
    expect(wrapper.findComponent(UIError).exists()).toBe(false)
    expect(wrapper.find('.map').exists()).toBe(false)
  })

  it('should have error', async () => {
    wrapper.vm.state.isLoading = false
    wrapper.vm.state.isError = true

    await wrapper.vm.$forceUpdate()

    expect(wrapper.findComponent(UILoader).exists()).toBe(false)
    expect(wrapper.findComponent(UIError).exists()).toBe(true)
    expect(wrapper.find('.map').exists()).toBe(false)
  })

  it('should have map', async () => {
    wrapper.vm.state.isLoading = false
    wrapper.vm.state.isError = false

    await wrapper.vm.$forceUpdate()

    console.log()

    expect(wrapper.findComponent(UILoader).exists()).toBe(false)
    expect(wrapper.findComponent(UIError).exists()).toBe(false)
    expect(wrapper.find('.map').exists()).toBe(true)
  })
})
