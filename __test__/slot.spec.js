import {mount} from '@vue/test-utils';
import Component from '../src/js/Component';

describe('Loading component slots', () => {

  test('accepts default slot and replace loading icon', () => {
    let wrapper = mount(Component, {
      propsData: {
        active: true
      },
      slots: {
        default: '<h3 class="text-center">Please wait...</h3>'
      }
    });

    expect(wrapper.contains('h3')).toBe(true);
    expect(wrapper.contains('.vld-icon')).toBe(true);
    expect(wrapper.contains('svg')).toBe(false);
    wrapper.destroy();
  });

  test('accepts text slot', () => {
    let wrapper = mount(Component, {
      propsData: {
        active: true
      },
      slots: {
        text: '<h4 class="text-center">Please wait...</h4>'
      }
    });

    expect(wrapper.contains('h4')).toBe(true);
    expect(wrapper.contains('.vld-icon')).toBe(true);
    expect(wrapper.contains('svg')).toBe(true);
    wrapper.destroy();
  });

});
