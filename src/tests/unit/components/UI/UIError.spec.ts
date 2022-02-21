import { mount } from '@vue/test-utils'
import UIError from '@/components/UI/UIError.vue'

const settings = {
  mainClass: 'UIError',
  content: 'IP Address Could Not Be Found',
}

const wrapper = mount(UIError)

describe('[UIError.vue]', () => {
  it('should have content', () => {
    expect(wrapper.text()).toBe(settings.content)
  })

  it('should have attributes', () => {
    expect(wrapper.attributes()).toEqual({
      class: settings.mainClass,
    })
  })
})
