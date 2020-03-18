import { mount } from "@vue/test-utils"
import RecipeDuration from "../../src/components/RecipeDuration"

describe("RecipeDuration.vue", () => {
  it("displays formatted duration", () => {
    const wrapper = mount(RecipeDuration, {
      propsData: {
        duration: 100
      }
    });
    expect(wrapper.text()).toMatchInlineSnapshot('"1 hr 40 min"');
  });
});
