<template>
  <div class="card-container" @click="onClick">
    <div class="card-top-section">
      <img src="../assets/png/image.png" alt="food" />
      <div class="image-overlay">
        <img
          class="favorite-icon"
          :src="favoriteIconPath"
          :alt="favoriteIconFileName"
        />
        <div class="premium-badge">
          <img src="../assets/svg/trophy.svg" alt="trophy.svg" />
          <span>Premium Recipe</span>
        </div>
      </div>
    </div>
    <div class="card-bottom-section">
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
        view-type="premium"
      />
    </div>
  </div>
</template>

<script>
import RecipeDetail from "./RecipeDetail";

export default {
  name: "PremiumRecipeCard",
  components: {
    RecipeDetail
  },
  props: {
    onClick: Function,
    card: Object,
    favorite: Boolean
  },
  computed: {
    favoriteIconFileName: function() {
      return this.favorite ? "heart-filled.svg" : "heart-outlined.svg";
    },
    favoriteIconPath: function() {
      return require(`../assets/svg/${this.favoriteIconFileName}`);
    }
  }
};
</script>

<style scoped>
.card-container {
  width: 21.4375rem;
  height: 19.875rem;
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
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(22, 27, 35, 0.2) 70.94%,
    rgba(26, 29, 34, 0.79) 106.25%
  );
}
.favorite-icon {
  width: 1.4375rem;
  height: 1.25rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.premium-badge {
  width: 7.3125rem;
  height: 1.25rem;
  position: relative;
  top: 10.75rem;
  left: 0.5rem;
  display: flex;
  border-radius: 0.625rem;
  background: rgba(255, 255, 255, 0.3);
  user-select: none;
}
.premium-badge img {
  width: 0.75rem;
  height: 0.75rem;
  padding: 0.25rem 0.25rem 0.25rem 0.5rem;
  color: #ffffff;
}
.premium-badge span {
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: -0.2px;
  color: #ffffff;
}
.card-bottom-section {
  width: 100%;
  height: 6.875rem;
}
</style>
