import { withKnobs, number } from "@storybook/addon-knobs";

import RecipeDuration from "../src/components/RecipeDuration.vue";

export default {
  title: "RecipeDuration",
  component: RecipeDuration,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { RecipeDuration },
  props: {
    duration: {
      default: number('Duration', 0)
    }
  },
  template: '<RecipeDuration :duration="duration" />'
});
