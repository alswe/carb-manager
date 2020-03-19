<template>
  <IconText :text="formatEnergy(energy, energyUnits)" icon="vector.svg" />
</template>

<script>
import IconText from "./shared/IconText";
import { formatEnergy } from "../utils/formatters";

export default {
  name: "RecipeDuration",
  components: {
    IconText
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
