import { shallowMount } from '@vue/test-utils'
import TrackerTableItem from '@/components/Tracker/TrackerTableItem.vue'

const settings = {
  mainClass: 'TrackerTableItem',
  title: 'IP Address',
  text: '83.97.23.105',
}

const wrapper = shallowMount(TrackerTableItem, {
  props: {
    title: settings.title,
    text: settings.text,
  },
})

describe('[TrackerTable.vue]', () => {
  it('should have attributes', () => {
    expect(wrapper.attributes()).toEqual({
      class: settings.mainClass,
    })
  })

  it('should have title', () => {
    const title = wrapper.find('.title')

    expect(title.exists()).toBe(true)
    expect(title.text()).toBe(settings.title)
  })

  it('should have text', () => {
    const text = wrapper.find('.text')

    expect(text.exists()).toBe(true)
    expect(text.text()).toBe(settings.text)
  })
})
