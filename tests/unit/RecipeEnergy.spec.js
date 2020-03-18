import { mount } from "@vue/test-utils";
import RecipeEnergy from "../../src/components/RecipeEnergy";
import { formatEnergy } from "../../src/utils/formatters";

describe("RecipeEnergy.vue", () => {
  it("displays formatted calories", () => {
    const energyUnits = 'calories';
    const wrapper = mount(RecipeEnergy, {
      propsData: {
        energy: 1000,
        energyUnits: energyUnits
      }
    });
    expect(wrapper.text()).toMatchInlineSnapshot(`"${formatEnergy(1000, energyUnits)}"`);
  });

  it("displays formatted calories", () => {
    const energyUnits = 'kilojoules';
    const wrapper = mount(RecipeEnergy, {
      propsData: {
        energy: 1000,
        energyUnits: energyUnits
      }
    });
    expect(wrapper.text()).toMatchInlineSnapshot(`"${formatEnergy(1000, energyUnits)}"`);
  });
});
