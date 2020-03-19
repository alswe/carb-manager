import { withKnobs, text, select } from "@storybook/addon-knobs";

import IconText from "../src/components/shared/IconText.vue";

export default {
  title: "IconText",
  component: IconText,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { IconText },
  props: {
    icon: {
      default: select(
        'Icon',
        { Clock: 'clock', Vector: 'vector' },
        'clock'
      )
    },
    text: {
      default: text('Text', '2 Calories')
    },
    color: {
      default: text('Color', '#0c0c0a')
    }
  },
  template: '<IconText :icon="icon" :text="text" :color="color" />'
});
