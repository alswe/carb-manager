import { mount } from "@vue/test-utils";
import RecipeDuration from "../../src/components/RecipeDuration";
import { formatDuration } from "../../src/utils/formatters";

describe("RecipeDuration.vue", () => {
  it("displays formatted duration", () => {
    const duration = 100;
    const wrapper = mount(RecipeDuration, {
      propsData: {
        duration: duration
      }
    });
    expect(wrapper.text()).toMatchInlineSnapshot(`"${formatDuration(duration)}"`);
  });
});
