import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";
import { cards } from "../src/mock";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { PremiumRecipeCard },
  props: {
    card: {
      default: object('Card', cards[0], 'Card - 1')
    }
  },
  template: '<PremiumRecipeCard :onClick="action" :card="card" />',
  methods: { action: action("clicked") }
});
