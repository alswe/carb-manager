import { withKnobs, number, select } from "@storybook/addon-knobs";

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
      default: select(
        'Energy Units',
        { Calories: 'calories', Kilojoules: 'kilojoules' },
        'calories'
      )
    }
  },
  template: '<RecipeEnergy :energy="energy" :energy-units="energyUnits" />'
});
