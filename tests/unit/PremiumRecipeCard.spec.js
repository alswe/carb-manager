import { shallowMount } from "@vue/test-utils";
import PremiumRecipeCard from "../../src/components/PremiumRecipeCard";
import { card } from "../../src/mock";

describe("PremiumRecipeCard.vue", () => {
  it("displays premium badge and favorite icon", () => {
    const wrapper = shallowMount(PremiumRecipeCard, {
      propsData: {
        card: card,
        favorite: true,
        onClick: () => {}
      }
    });
    expect(wrapper.find(".premium-badge").text()).toMatchInlineSnapshot(`"Premium Recipe"`);
    expect(wrapper.find(".premium-badge img").attributes('alt')).toBe("trophy.svg");
    expect(wrapper.find(".favorite-icon").attributes('alt')).toBe("heart-filled.svg");
  });
});
