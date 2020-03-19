<template>
  <RecipeDurationOrEnergy
    :value="energy"
    :formatter="formatEnergy"
    icon="vector.svg"
    :unit="energyUnits"
  />
</template>

<script>
import RecipeDurationOrEnergy from "./shared/RecipeDurationOrEnergy";
import { formatEnergy } from "../utils/formatters";

export default {
  name: "RecipeDuration",
  components: {
    RecipeDurationOrEnergy
  },
  props: {
    energy: Number,
    energyUnits: {
      type: String,
      default: "calories"
    }
  },
  methods: {
    formatEnergy: formatEnergy
  }
};
</script>
