<template>
  <IconText :text="formatDuration(duration)" icon="clock" :color="color" />
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
    duration: Number,
    color: String
  },
  methods: {
    formatDuration: formatDuration
  }
};
</script>
