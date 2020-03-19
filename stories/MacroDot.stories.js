import { withKnobs, text } from "@storybook/addon-knobs";

import MacroDot from "../src/components/shared/MacroDot.vue";

export default {
  title: "MacroDot",
  component: MacroDot,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { MacroDot },
  props: {
    color: {
      default: text('Color', '#f94642')
    },
    textColor: {
      default: text('TextColor', '#f94642')
    },
    text: {
      default: text('Text', '2g')
    }
  },
  template: '<MacroDot :color="color" :text="text" :text-color="textColor" />'
});
