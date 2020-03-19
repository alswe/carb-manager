import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

import RecipeOfTheDay from "../src/components/RecipeOfTheDay.vue";
import { card } from "../src/mock";

export default {
  title: "RecipeOfTheDay",
  component: RecipeOfTheDay,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { RecipeOfTheDay },
  props: {
    // Add your props here and hook them up to the template below
    card: {
      default: card
    }
  },
  template: '<RecipeOfTheDay :onClick="action" :card="card" />',
  methods: { action: action("clicked") }
});
