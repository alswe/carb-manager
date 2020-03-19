<template>
  <div class="recipe-duration-and-energy">
    <span class="recipe-duration">
      <RecipeDuration :duration="duration" :color="color" />
    </span>
    <span class="recipe-energy">
      <RecipeEnergy :energy="energy" :energy-units="energyUnits" :color="color" />
    </span>
  </div>
</template>

<script>
import RecipeDuration from "./RecipeDuration";
import RecipeEnergy from "./RecipeEnergy";

export default {
  name: "RecipeDurationAndEnergy",
  components: {
    RecipeDuration,
    RecipeEnergy
  },
  props: {
    duration: Number,
    energy: Number,
    energyUnits: String,
    color: String
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
