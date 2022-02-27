import { mount } from '@vue/test-utils'
import { IIPAddressData } from '@/services/IPApiService/IPApiSupport'
import TrackerTable from '@/components/Tracker/TrackerTable.vue'
import TrackerTableItem from '@/components/Tracker/TrackerTableItem.vue'
import UIError from '@/components/UI/UIError.vue'
import UILoader from '@/components/UI/UILoader.vue'

const settings = {
  mainClass: 'TrackerTable',
}

const mockAddressData = {
  query: '83.97.23.105',
  status: 'success',
  city: 'Berlin',
  lat: '52.5196',
  lon: '13.4069',
  isp: 'M247 Ltd',
} as IIPAddressData

const wrapper = mount(TrackerTable)

describe('[TrackerTable.vue]', () => {
  it('should have attributes', () => {
    expect(wrapper.attributes()).toEqual({
      class: settings.mainClass,
    })
  })

  it('should have loader', async () => {
    wrapper.vm.state.isLoading = true
    wrapper.vm.state.isError = false
    wrapper.vm.state.address = null

    await wrapper.vm.$forceUpdate()

    expect(wrapper.findComponent(UILoader).exists()).toBe(true)
    expect(wrapper.findComponent(UIError).exists()).toBe(false)
    expect(wrapper.findComponent(TrackerTableItem).exists()).toBe(false)
  })

  it('should have error', async () => {
    wrapper.vm.state.isLoading = false
    wrapper.vm.state.isError = true
    wrapper.vm.state.address = null

    await wrapper.vm.$forceUpdate()

    expect(wrapper.findComponent(UILoader).exists()).toBe(false)
    expect(wrapper.findComponent(UIError).exists()).toBe(true)
    expect(wrapper.findComponent(TrackerTableItem).exists()).toBe(false)
  })

  it('should have table', async () => {
    wrapper.vm.state.isLoading = false
    wrapper.vm.state.isError = false
    wrapper.vm.state.address = mockAddressData

    await wrapper.vm.$forceUpdate()

    expect(wrapper.findComponent(UILoader).exists()).toBe(false)
    expect(wrapper.findComponent(UIError).exists()).toBe(false)
    expect(wrapper.findComponent(TrackerTableItem).exists()).toBe(true)
  })
})
