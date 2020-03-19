import { withKnobs, number, text } from "@storybook/addon-knobs";

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
    },
    color: {
      default: text('Color', '#0c0c0a')
    }
  },
  template: '<RecipeDuration :duration="duration" :color="color" />'
});
