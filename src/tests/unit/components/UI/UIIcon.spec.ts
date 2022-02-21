import { shallowMount } from '@vue/test-utils'
import UIIcon from '@/components/UI/UIIcon.vue'

const settings = {
  mainClass: 'UIIcon',
  modifierClass: 'arrow',
}

const wrapper = shallowMount(UIIcon, {
  props: {
    name: settings.modifierClass,
  },
})

describe('[UIIcon.vue]', () => {
  it('should have attributes', () => {
    expect(wrapper.attributes()).toEqual({
      class: `${settings.mainClass} ${settings.modifierClass}`,
    })
  })
})
