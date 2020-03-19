<template>
  <IconText :text="formatDuration(duration)" icon="clock.svg" />
</template>

<script>
import IconText from "./shared/IconText";
import { formatDuration } from "../utils/formatters";

export default {
  name: "RecipeDuration",
  components: {
    IconText
  },
  props: {
    duration: Number
  },
  methods: {
    formatDuration: formatDuration
  }
};
</script>
