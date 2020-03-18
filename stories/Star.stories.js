import { withKnobs, text } from "@storybook/addon-knobs";

import Star from "../src/components/Star.vue";

export default {
  title: "Star",
  component: Star,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { Star },
  props: {
    type: {
      default: text('Type', 'full')
    }
  },
  template: '<Star :type="type" />'
});
