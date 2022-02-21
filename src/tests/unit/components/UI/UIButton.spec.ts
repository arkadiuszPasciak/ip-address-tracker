import { shallowMount } from '@vue/test-utils'
import UIButton from '@/components/UI/UIButton.vue'

const settings = {
  name: 'Find your location',
  mainClass: 'UIButton',
  modifierClass: 'primary',
  type: 'button',
}

const wrapper = shallowMount(UIButton, {
  props: {
    name: settings.name,
    modifier: settings.modifierClass,
  },
})

describe('[UIButton.vue]', () => {
  it('should have attributes', () => {
    expect(wrapper.attributes()).toEqual({
      class: `${settings.mainClass} ${settings.modifierClass}`,
      ['aria-label']: settings.name,
      type: settings.type,
    })
  })
})
