import { withKnobs, number } from "@storybook/addon-knobs";

import StarRating from "../src/components/StarRating.vue";

export default {
  title: "StarRating",
  component: StarRating,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { StarRating },
  props: {
    score: {
      default: number('Score', 5)
    }
  },
  template: '<StarRating :score="score" />'
});
