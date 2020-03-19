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
        { Clock: 'clock.svg', Vector: 'vector.svg' },
        'clock.svg'
      )
    },
    text: {
      default: text('Text', '2 Calories')
    }
  },
  template: '<IconText :icon="icon" :text="text" />'
});
