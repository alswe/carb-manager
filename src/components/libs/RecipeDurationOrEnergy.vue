<template>
  <span class="recipe-duration-or-energy">
    <img class="recipe-duration-or-energy-icon" :src="iconPath" :alt="icon" />
    <span class="recipe-duration-or-energy-text">{{ formatter(value, unit) }}</span>
  </span>
</template>

<script>
export default {
  name: "RecipeDurationOrEnergy",
  props: {
    value: Number,
    icon: String,
    formatter: Function,
    unit: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconPath: function() {
      return require(`../../assets/svg/${this.icon}`);
    }
  }
};
</script>

<style scoped>
.recipe-duration-or-energy {
  display: inline-flex;
}
.recipe-duration-or-energy-icon {
  width: 1rem;
  height: 1rem;
}
.recipe-duration-or-energy-text {
  font-size: 0.75rem;
  line-height: 1rem;
  padding-left: 0.5rem;
  color: #393C40;
}
</style>
