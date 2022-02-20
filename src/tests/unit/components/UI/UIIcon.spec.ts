import { shallowMount } from '@vue/test-utils'
import UIIcon from '@/components/UI/UIIcon.vue'

const wrapper = shallowMount(UIIcon, {
  props: {
    name: 'arrow',
  },
})

describe('[UIIcon.vue]', () => {
  it('should have classes', () => {
    expect(wrapper.classes('UIIcon')).toBe(true)

    expect(wrapper.classes('arrow')).toBe(true)
  })
})
