import { withKnobs, number, text } from "@storybook/addon-knobs";

import RecipeEnergy from "../src/components/RecipeEnergy.vue";

export default {
  title: "RecipeEnergy",
  component: RecipeEnergy,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { RecipeEnergy },
  props: {
    energy: {
      default: number('Energy', 0)
    },
    energyUnits: {
      default: text('Energy Units', 'calories')
    }
  },
  template: '<RecipeEnergy :energy="energy" :energy-units="energyUnits" />'
});
