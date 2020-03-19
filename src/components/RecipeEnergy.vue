<template>
  <IconText :text="formatEnergy(energy, energyUnits)" icon="vector" :color="color" />
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
    },
    color: String
  },
  methods: {
    formatEnergy: formatEnergy
  }
};
</script>
