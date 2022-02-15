import { shallowMount } from '@vue/test-utils'
import UIButton from '@/components/UI/UIButton.vue'

const text = 'Find your location'

const wrapper = shallowMount(UIButton, {
  props: {
    name: text,
    modifier: 'primary',
  },
})

describe('[UIButton.vue]', () => {
  it('should have aria label attribute', () => {
    expect(wrapper.attributes('aria-label')).toBe(text)
  })

  it('should have button type attribute', () => {
    expect(wrapper.attributes('type')).toBe('button')
  })

  it('should have classes', () => {
    expect(wrapper.classes('UIButton')).toBe(true)

    expect(wrapper.classes('primary')).toBe(true)
  })
})
