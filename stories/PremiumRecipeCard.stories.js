import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";
import { card } from "../src/mock";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { PremiumRecipeCard },
  props: {
    // Add your props here and hook them up to the template below
    card: {
      default: card
    },
    favorite: {
      default: boolean('Favorite', false)
    }
  },
  template: '<PremiumRecipeCard :onClick="action" :favorite="favorite" :card="card" />',
  methods: { action: action("clicked") }
});
