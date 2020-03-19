<template>
  <div class="nutrients">
    <span class="nutrient" v-for="(nutrient, index) in nutrients" :key="index">
      <MacroDot :text="nutrient.text" :color="nutrient.color" :text-color="color" />
    </span>
  </div>
</template>

<script>
import MacroDot from "./shared/MacroDot";
import { stringFormat } from "../utils/formatters";

export default {
  name: "Nutrients",
  components: {
    MacroDot
  },
  props: {
    carbs: Number,
    protein: Number,
    fats: Number,
    color: String
  },
  computed: {
    nutrients: function() {
      const unit = "g";
      return [
        { text: stringFormat(this.carbs, unit), color: "#f94642" },
        { text: stringFormat(this.protein, unit), color: "#3177bb" },
        { text: stringFormat(this.fats, unit), color: "#fda120" }
      ];
    }
  }
};
</script>

<style scoped>
.nutrient:not(:first-child) {
  padding-left: 0.5rem;
}
</style>
