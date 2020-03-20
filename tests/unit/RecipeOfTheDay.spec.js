import { shallowMount } from "@vue/test-utils";
import RecipeOfTheDay from "../../src/components/RecipeOfTheDay";
import { cards } from "../../src/mock";

describe("RecipeOfTheDay.vue", () => {
  it("displays 'Learn More', 'RECIPE OF THE DAY', and not displays 'ratings'", () => {
    const wrapper = shallowMount(RecipeOfTheDay, {
      propsData: {
        card: cards[1],
        onClick: () => {}
      }
    });
    expect(wrapper.find(".recipe-of-the-day").text()).toMatchInlineSnapshot(`"Recipe of the day"`);
    expect(wrapper.contains(".recipe-rating-count")).toBe(false);
    expect(wrapper.find(".learn-more span").text()).toMatchInlineSnapshot(`"Learn More"`);
  });
});
