import { mount } from '@vue/test-utils'
import UILoader from '@/components/UI/UILoader.vue'

const wrapper = mount(UILoader)

describe('[UILoader.vue]', () => {
  it('should have classes', () => {
    expect(wrapper.classes('UILoader')).toBe(true)
  })

  it('should have child div', () => {
    expect(wrapper.find('.animation').exists()).toBe(true)
  })
})
