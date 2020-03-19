import { shallowMount } from "@vue/test-utils"
import IconText from "../../src/components/shared/IconText"

describe("IconText.vue", () => {
  it("displays icon and text", () => {
    const icon = 'clock.svg';
    const text = '1 hr 40 min';
    const color = '#0c0c0a';
    const wrapper = shallowMount(IconText, {
      propsData: {
        icon: icon,
        text: text,
        color: color
      }
    });
    expect(wrapper.contains('i.icon-text-icon')).toBe(true);
    expect(wrapper.text()).toBe(text);
  });
});
