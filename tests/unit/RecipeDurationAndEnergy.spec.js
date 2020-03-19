import { mount } from "@vue/test-utils";
import RecipeDurationAndEnergy from "../../src/components/RecipeDurationAndEnergy";
import { formatDuration, formatEnergy } from "../../src/utils/formatters";

describe("RecipeDurationAndEnergy.vue", () => {
  it("displays formatted text", () => {
    const duration = 100;
    const energy = 100;
    const energyUnits = 'kilojoules';
    const wrapper = mount(RecipeDurationAndEnergy, {
      propsData: {
        duration: duration,
        energy: energy,
        energyUnits: energyUnits
      }
    });
    expect(wrapper.text()).toMatchInlineSnapshot(
      `"${formatDuration(duration)}  ${formatEnergy(energy, energyUnits)}"`
    );
  });
});
