<template>
  <div class="recipe-detail">
    <div class="recipe-title" :title="title">
      <p>{{ title }}</p>
    </div>
    <div class="recipe-ratings">
      <StarRating :score="score" />
      <span class="recipe-rating-count">{{ stringFormat(ratings, ' ratings') }}</span>
    </div>
    <div class="recipe-characteristics">
      <RecipeDurationAndEnergy :duration="duration" :energy="energy" :energy-units="energyUnits" />
      <Nutrients :carbs="carbs" :protein="protein" :fats="fats" />
    </div>
  </div>
</template>

<script>
import StarRating from "./StarRating";
import RecipeDurationAndEnergy from "./RecipeDurationAndEnergy";
import Nutrients from "./Nutrients";
import { stringFormat } from "../utils/formatters";

export default {
  name: "RecipeDetail",
  components: {
    StarRating,
    RecipeDurationAndEnergy,
    Nutrients
  },
  props: {
    title: String,
    score: Number,
    ratings: Number,
    duration: Number,
    energy: Number,
    energyUnits: String,
    carbs: Number,
    protein: Number,
    fats: Number
  },
  methods: {
    stringFormat: stringFormat
  }
};
</script>

<style scoped>
.recipe-detail {
  max-width: 19.4375rem;
  max-height: 5.875rem;
  position: relative;
}
.recipe-title {
  overflow: hidden;
  /* line break */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.recipe-title p {
  margin: 0;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.25rem;
  color: #0c0c0a;
}
.recipe-ratings {
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
  line-height: 0.875rem;
}
.recipe-rating-count {
  color: #1ca677;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 0.875rem;
  padding-left: 0.5rem;
}
.recipe-characteristics {
  display: flex;
  line-height: 0.75rem;
  justify-content: space-between;
  margin-top: 0.5rem;
}
</style>
