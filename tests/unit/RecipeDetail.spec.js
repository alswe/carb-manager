import { shallowMount } from "@vue/test-utils";
import RecipeDetail from "../../src/components/RecipeDetail";
import { stringFormat } from "../../src/utils/formatters";

describe("RecipeDetail.vue", () => {
  it("displays recipe title and ratings", () => {
    const title = 'Low Carb Thai Chicken Curry with Coconut Cauliflower Rice';
    const wrapper = shallowMount(RecipeDetail, {
      propsData: {
        title: title,
        score: 4,
        ratings: 200,
        duration: 0,
        energy: 0,
        energyUnits: 'calories',
        carbs: 0,
        protein: 0,
        fats: 0
      }
    });
    expect(wrapper.text().replace(/(\r\n|\n|\r)/g, "")).toBe(`${title}        ${stringFormat(200, ' ratings')}`);
  });
});
