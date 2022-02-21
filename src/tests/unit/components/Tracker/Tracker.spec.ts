import { mount } from '@vue/test-utils'
import Tracker from '@/components/Tracker/Tracker.vue'
import TrackerSearch from '@/components/Tracker/TrackerSearch.vue'
import TrackerTable from '@/components/Tracker/TrackerTable.vue'
import TrackerMap from '@/components/Tracker/TrackerMap.vue'

const settings = {
  mainClass: 'Tracker',
  headingTranslation: 'IP Address Tracker',
}

const wrapper = mount(Tracker)

describe('[Tracker.vue]', () => {
  it('should have attributes', () => {
    expect(wrapper.attributes()).toEqual({
      class: settings.mainClass,
    })
  })

  it('should have heading', () => {
    const heading = wrapper.find('h1')

    expect(heading.classes('title')).toBe(true)
    expect(heading.text()).toBe(settings.headingTranslation)
  })

  it('should have components', () => {
    expect(wrapper.findComponent(TrackerSearch).exists()).toBe(true)
    expect(wrapper.findComponent(TrackerTable).exists()).toBe(true)
    expect(wrapper.findComponent(TrackerMap).exists()).toBe(true)
  })
})
