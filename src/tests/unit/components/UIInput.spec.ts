import { shallowMount } from '@vue/test-utils'
import UIInput from '@/components/UI/UIInput.vue'
import { masks } from '@/utils/masks'
import { ref } from 'vue'

const valueInput = ref('')

const settings = {
  name: 'search-ip',
  mainClass: 'UIInput',
  modifierClass: 'primary',
  placeholder: 'Search for any IP address or domain',
  type: 'text',
}

const wrapper = shallowMount(UIInput, {
  props: {
    name: settings.name,
    modifier: settings.modifierClass,
    placeholder: settings.placeholder,
    mask: 'ipAddress',
    modelValue: valueInput,
  },
})

describe('[UIInput.vue]', () => {
  it('should have attributes', () => {
    expect(wrapper.attributes()).toEqual({
      name: settings.name,
      placeholder: settings.placeholder,
      type: settings.type,
      class: `${settings.mainClass} ${settings.modifierClass}`,
      ['data-mask']: masks.ipAddress,
      ['data-mask-inited']: 'true',
      maxlength: '15',
    })
  })

  it('should write only ip address', () => {
    const input = wrapper.find('input')

    input.setValue('123.123.123.123')
    input.trigger('input')

    expect(input.element.value).toBe('123.123.123.123')

    input.setValue('abcdefghijk')
    input.trigger('input')

    expect(input.element.value).toBe('')

    input.setValue('!@#$%^&*(){}<>')
    input.trigger('input')

    expect(input.element.value).toBe('')
  })
})
