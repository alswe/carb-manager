<template>
  <span class="recipe-duration-and-energy">
    <span class="recipe-duration">
      <RecipeDuration :duration="duration" />
    </span>
    <span class="recipe-energy">
      <RecipeEnergy :energy="energy" :energy-units="energyUnits" />
    </span>
  </span>
</template>

<script>
import RecipeDuration from "./RecipeDuration";
import RecipeEnergy from "./RecipeEnergy";
import { formatDuration } from "../utils/formatters";

export default {
  name: "RecipeDurationAndEnergy",
  components: {
    RecipeDuration,
    RecipeEnergy
  },
  props: {
    duration: Number,
    energy: Number,
    energyUnits: String
  }
};
</script>

<style scoped>
.recipe-duration-and-energy {
  display: inline-flex;
}
.recipe-energy {
  padding-left: 1rem;
}
</style>
