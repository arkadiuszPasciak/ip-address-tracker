import { mount } from '@vue/test-utils'
import UILoader from '@/components/UI/UILoader.vue'

const settings = {
  mainClass: 'UILoader',
  animationClass: '.animation',
}

const wrapper = mount(UILoader)

describe('[UILoader.vue]', () => {
  it('should have attributes', () => {
    expect(wrapper.attributes()).toEqual({
      class: settings.mainClass,
    })
  })

  it('should have child div', () => {
    expect(wrapper.find(settings.animationClass).exists()).toBe(true)
  })
})
