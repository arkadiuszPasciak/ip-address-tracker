import { mount } from '@vue/test-utils'
import TrackerSearch from '@/components/Tracker/TrackerSearch.vue'
import UIButton from '@/components/UI/UIButton.vue'
import UIIcon from '@/components/UI/UIIcon.vue'
import UIInput from '@/components/UI/UIInput.vue'

const settings = {
  mainClass: 'TrackerSearch',
  disabledClass: 'is-disabled',
}

const wrapper = mount(TrackerSearch)

const ButtonElement = wrapper.find('button')
const InputElement = wrapper.find('input')

describe('[TrackerSearch.vue]', () => {
  it('should have attributes', () => {
    expect(wrapper.attributes()).toEqual({
      class: settings.mainClass,
    })
  })

  it('should have components', () => {
    expect(wrapper.findComponent(UIButton).exists()).toBe(true)
    expect(wrapper.findComponent(UIIcon).exists()).toBe(true)
    expect(wrapper.findComponent(UIInput).exists()).toBe(true)
  })

  it('should button disabled if input value length is less than 4', async () => {
    InputElement.setValue('')

    await wrapper.vm.$nextTick()

    expect(InputElement.element.value).toBe('')
    expect(ButtonElement.classes(settings.disabledClass)).toBe(true)

    InputElement.setValue('123')

    await wrapper.vm.$nextTick()

    expect(InputElement.element.value).toBe('123')
    expect(ButtonElement.classes(settings.disabledClass)).toBe(true)
  })

  it('should button not be disabled if input value length is more than 4', async () => {
    InputElement.setValue('123.')

    await wrapper.vm.$nextTick()

    expect(InputElement.element.value).toBe('123.')
    expect(ButtonElement.classes(settings.disabledClass)).toBe(false)

    InputElement.setValue('83.97.23.105')

    await wrapper.vm.$nextTick()

    expect(InputElement.element.value).toBe('83.97.23.105')
    expect(ButtonElement.classes(settings.disabledClass)).toBe(false)
  })
})
