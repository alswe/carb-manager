<template>
  <span class="nutrients">
    <span class="nutrient" v-for="(nutrient, index) in nutrients" :key="index">
      <MacroDot :text="nutrient.text" :color="nutrient.color" />
    </span>
  </span>
</template>

<script>
import MacroDot from "./shared/MacroDot";
import { formatNutrient } from "../utils/formatters";

export default {
  name: "Nutrients",
  components: {
    MacroDot
  },
  props: {
    carbs: Number,
    protein: Number,
    fats: Number
  },
  computed: {
    nutrients: function() {
      return [
        { text: formatNutrient(this.carbs), color: "#f94642" },
        { text: formatNutrient(this.protein), color: "#3177bb" },
        { text: formatNutrient(this.fats), color: "#fda120" }
      ];
    }
  },
  methods: {
    formatNutrient: formatNutrient
  }
};
</script>

<style scoped>
.nutrient:not(:first-child) {
  padding-left: 0.5rem;
}
</style>
