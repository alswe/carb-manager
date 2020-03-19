<template>
  <RecipeDurationOrEnergy
    :value="duration"
    :formatter="formatDuration"
    icon="clock.svg"
  />
</template>

<script>
import RecipeDurationOrEnergy from "./shared/RecipeDurationOrEnergy";
import { formatDuration } from "../utils/formatters";

export default {
  name: "RecipeDuration",
  components: {
    RecipeDurationOrEnergy
  },
  props: {
    duration: Number
  },
  methods: {
    formatDuration: formatDuration
  }
};
</script>
