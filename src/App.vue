<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <img
          alt="Carb Manager"
          src="./assets/svg/cm-logo.svg"
          class="cm-logo"
        />
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>

      <div class="recipe-wrapper">
        <PremiumRecipeCard
          v-for="(card, index) in cards"
          :key="index"
          :onClick="onCardClick"
          :card="card"
        />
      </div>
      <div class="recipe-wrapper">
        <RecipeOfTheDay
          v-for="(card, index) in cards"
          :key="index"
          :onClick="onCardClick"
          :card="card"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PremiumRecipeCard from "./components/PremiumRecipeCard.vue";
import RecipeOfTheDay from "./components/RecipeOfTheDay.vue";
import { cards } from "./mock";

export default {
  name: "App",
  components: {
    PremiumRecipeCard,
    RecipeOfTheDay
  },
  data: function() {
    return {
      cards: cards
    };
  },
  methods: {
    onCardClick: event => {
      console.log("clicked", event);
    }
  }
};
</script>

<style>
#app {
  font-family: "proxima-nova", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
.cm-logo-wrapper {
  margin-bottom: 30px;
}

.cm-logo {
  max-width: 150px;
  height: auto;
}

.cm-container {
  max-width: 960px;
  margin: auto;
}

.recipe-wrapper {
  padding: 16px;
  display: flex;
  justify-content: space-around;
}
@media screen and (max-width: 686px) {
  .recipe-wrapper {
    display: grid;
  }
  .recipe-wrapper > div:not(:first-child) {
    margin-top: 1rem;
  }
}
</style>
