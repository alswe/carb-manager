import { mount } from "@vue/test-utils"
import Star from "../../src/components/Star"

describe("Star.vue", () => {
  it("displays star-full.svg for 'full' type of star", () => {
    const wrapper = mount(Star, {
      propsData: {
        type: 'full'
      }
    });
    expect(wrapper.find('img').classes('star-full')).toBe(true);
  });

  it("displays star-half.svg for 'half' type of star", () => {
    const wrapper = mount(Star, {
      propsData: {
        type: 'half'
      }
    });
    expect(wrapper.find('img').classes('star-half')).toBe(true);
  });

  it("displays star-empty.svg for 'empty' type of star", () => {
    const wrapper = mount(Star, {
      propsData: {
        type: 'empty'
      }
    });
    expect(wrapper.find('img').classes('star-empty')).toBe(true);
  });
});
