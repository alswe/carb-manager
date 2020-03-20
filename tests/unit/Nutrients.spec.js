import { mount } from "@vue/test-utils";
import Nutrients from "../../src/components/Nutrients";
import { stringFormat } from "../../src/utils/formatters";

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
    const unit = 'g';
    expect(wrapper.text().replace(/(\r\n|\n|\r)/g, "")).toMatchInlineSnapshot(
      `"${stringFormat(carbs, unit)}${stringFormat(protein, unit)}${stringFormat(fats, unit)}"`
    );
  });
});
