import { shallowMount } from "@vue/test-utils"
import MacroDot from "../../src/components/shared/MacroDot"

describe("MacroDot.vue", () => {
  it("displays macrodot and text", () => {
    const color = '#123456';
    const text = '20g';
    const wrapper = shallowMount(MacroDot, {
      propsData: {
        color: color,
        text: text
      }
    });
    expect(wrapper.find('.macro-dot-text').attributes('style')).toBe(`--dot-background-color: ${color};`);
    expect(wrapper.text()).toBe(text);
  });
});
