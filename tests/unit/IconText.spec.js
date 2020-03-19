import { shallowMount } from "@vue/test-utils"
import IconText from "../../src/components/shared/IconText"

describe("IconText.vue", () => {
  it("displays icon and text", () => {
    const icon = 'clock.svg';
    const text = '1 hr 40 min';
    const wrapper = shallowMount(IconText, {
      propsData: {
        icon: icon,
        text: text
      }
    });
    expect(wrapper.find('img').classes('icon-text-icon')).toBe(true);
    expect(wrapper.text()).toBe(text);
  });
});
