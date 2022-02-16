import { mount } from '@vue/test-utils'
import UIError from '@/components/UI/UIError.vue'

const wrapper = mount(UIError)

describe('[UIError.vue]', () => {
  it('should have text', () => {
    expect(wrapper.text()).toBe('IP Address Could Not Be Found')
  })

  it('should have classes', () => {
    expect(wrapper.classes('UIError')).toBe(true)
  })
})
