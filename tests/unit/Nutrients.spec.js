import { mount } from "@vue/test-utils";
import Nutrients from "../../src/components/Nutrients";
import { formatNutrient } from "../../src/utils/formatters";

describe("Nutrients.vue", () => {
  it("displays formatted nutrients", () => {
    const carbs = 20;
    const protein = 16;
    const fats = 6;
    const wrapper = mount(Nutrients, {
      propsData: {
        carbs: carbs,
        protein: protein,
        fats: fats
      }
    });
    expect(wrapper.text()).toMatchInlineSnapshot(
      `"${formatNutrient(carbs)}${formatNutrient(protein)}${formatNutrient(fats)}"`
    );
  });
});
