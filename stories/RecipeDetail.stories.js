import { withKnobs, number, text, select } from "@storybook/addon-knobs";

import RecipeDetail from "../src/components/RecipeDetail.vue";

export default {
  title: "RecipeDetail",
  component: RecipeDetail,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { RecipeDetail },
  props: {
    title: {
      default: text('Title', 'Low Carb Thai Chicken Curry with Coconut Cauliflower Rice')
    },
    score: {
      default: number('Score', 3.2)
    },
    ratings: {
      default: number('Ratings', 200)
    },
    duration: {
      default: number('Duration', 0)
    },
    energy: {
      default: number('Energy', 0)
    },
    energyUnits: {
      default: select(
        'Energy Units',
        { Calories: 'calories', Kilojoules: 'kilojoules' },
        'calories'
      )
    },
    carbs: {
      default: number('Cabs', 20)
    },
    protein: {
      default: number('Protein', 16)
    },
    fats: {
      default: number('Fats', 6)
    },
  },
  template: `
    <RecipeDetail
      :title="title"
      :score="score"
      :ratings="ratings"
      :duration="duration"
      :energy="energy"
      :energyUnits="energyUnits"
      :carbs="carbs"
      :protein="protein"
      :fats="fats"
    />
  `
});
