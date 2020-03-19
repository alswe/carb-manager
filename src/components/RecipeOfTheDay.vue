<template>
  <div class="card-container" @click="onClick">
    <div class="card-top-section">
      <img src="../assets/png/image.png" alt="food" />
      <div class="image-overlay">
        <span class="recipe-of-the-day">Recipe of the day</span>
        <div class="recipe-detail-container">
          <RecipeDetail
            :title="card.title"
            :score="card.score"
            :ratings="card.ratings"
            :duration="card.duration"
            :energy="card.energy"
            :energyUnits="card.energyUnits"
            :carbs="card.carbs"
            :protein="card.protein"
            :fats="card.fats"
            view-type="day"
          />
        </div>
        <div class="learn-more">
          <span>Learn More</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeDetail from "./RecipeDetail";

export default {
  name: "RecipeOfTheDay",
  components: {
    RecipeDetail
  },
  props: {
    onClick: Function,
    card: Object
  }
};
</script>

<style scoped>
.card-container {
  width: 21.4375rem;
  background: #ffffff;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  border-radius: 0.75rem;
  cursor: pointer;
  overflow: hidden;
}
.card-top-section {
  width: 100%;
  height: 12.5rem;
  position: relative;
  overflow: hidden;
  opacity: 1;
}
.card-top-section:hover {
  opacity: 0.8;
}
.image-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  text-align: left;
  background: rgba(0, 0, 0, 0.6);
}
.recipe-of-the-day {
  text-transform: uppercase;
  font-weight: bold;
  color: #23c17b;
  font-size: 0.75rem;
  position: relative;
  padding-left: 1rem;
  top: 1.5rem;
}
.recipe-detail-container {
  position: relative;
  top: 1rem;
}
.learn-more {
  width: 6rem;
  height: 1.6rem;
  color: white;
  text-align: center;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  position: absolute;
  bottom: 1.2rem;
  right: 1rem;
}
.learn-more span {
  line-height: 1.6rem;
  font-weight: 500;
  font-size: 0.75rem;
}
</style>
