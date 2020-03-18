<template>
  <span class="recipe-duration">
    <img class="recipe-clock" src="../assets/svg/clock.svg" alt="clock.svg" />
    <span class="recipe-duration-text">{{ duration | formatDuration }}</span>
  </span>
</template>

<script>
export default {
  name: "RecipeDuration",
  props: {
    duration: Number
  },
  filters: {
    formatDuration: function(duration) {
      const min = duration % 60;
      if (duration < 60) {
        return `${duration} min`;
      }
      const hr = Math.floor(duration / 60);
      return min === 0 ? `${hr} hr` : `${hr} hr ${min} min`;
    }
  }
};
</script>

<style scoped>
.recipe-duration {
  display: inline-flex;
}
.recipe-clock {
  width: 1rem;
  height: 1rem;
}
.recipe-duration-text {
  font-size: 0.75rem;
  line-height: 1rem;
  padding-left: 0.5rem;
  color: #393C40;
}
</style>
