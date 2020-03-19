import { withKnobs, number, select } from "@storybook/addon-knobs";

import RecipeDurationAndEnergy from "../src/components/RecipeDurationAndEnergy.vue";

export default {
  title: "RecipeDurationAndEnergy",
  component: RecipeDurationAndEnergy,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { RecipeDurationAndEnergy },
  props: {
    duration: {
      default: number('Duration', 0)
    },
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
  template: `
    <RecipeDurationAndEnergy
      :duration="duration"
      :energy="energy"
      :energy-units="energyUnits"
    />
  `
});
