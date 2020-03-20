import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import RecipeOfTheDay from "../src/components/RecipeOfTheDay.vue";
import { cards } from "../src/mock";

export default {
  title: "RecipeOfTheDay",
  component: RecipeOfTheDay,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { RecipeOfTheDay },
  props: {
    card: {
      default: object('Card', cards[1], 'Card - 2')
    }
  },
  template: '<RecipeOfTheDay :onClick="action" :card="card" />',
  methods: { action: action("clicked") }
});
