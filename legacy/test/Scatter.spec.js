import { mount } from '@vue/test-utils'
import LegacyScatter from './examples/Scatter.vue'

describe('LegacyScatter', () => {
  const Component = {
    template:
      '<div><LegacyScatter :chartId="chartId" :plugins="plugins" /></div>',
    components: { LegacyScatter },
    props: ['chartId', 'plugins']
  }

  it('should render a canvas', () => {
    const wrapper = mount(Component)

    const scatterChartEl = wrapper.find('#scatter-chart')
    expect(scatterChartEl.element.id).not.toBe('undefined')
    expect(scatterChartEl.exists()).toBe(true)

    const canvasEl = wrapper.find('canvas')
    expect(canvasEl.exists()).toBe(true)
  })

  it('should change id based on prop', () => {
    const wrapper = mount(Component, {
      propsData: { chartId: 'scatterchartprop' }
    })

    const scatterChartEl = wrapper.find('#scatterchartprop')
    expect(scatterChartEl.element.id).not.toBe('undefined')
    expect(scatterChartEl.exists()).toBe(true)
  })

  it('should add inline plugins based on prop', () => {
    const testPlugin = {
      title: {
        display: true
      }
    }

    const wrapper = mount(Component, {
      propsData: { plugins: testPlugin }
    })

    expect(Object.keys(wrapper.props().plugins).length).toEqual(1)
  })
})