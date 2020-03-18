import { withKnobs, number, text } from "@storybook/addon-knobs";

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
      default: text('Energy Units', 'calories')
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
