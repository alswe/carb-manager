import { withKnobs, select } from "@storybook/addon-knobs";

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
      default: select(
        'Type',
        { Full: 'full', Half: 'half', Empty: 'empty' },
        'full'
      )
    }
  },
  template: '<Star :type="type" />'
});
