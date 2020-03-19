import { withKnobs, number } from "@storybook/addon-knobs";

import Nutrients from "../src/components/Nutrients.vue";

export default {
  title: "Nutrients",
  component: Nutrients,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { Nutrients },
  props: {
    carbs: {
      default: number('Carbs', 20)
    },
    protein: {
      default: number('Protein', 16)
    },
    fats: {
      default: number('Fats', 6)
    }
  },
  template: '<Nutrients :carbs="carbs" :protein="protein" :fats="fats" />'
});
