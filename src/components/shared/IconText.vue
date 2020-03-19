<template>
  <span class="icon-text" :style="`--icon-text-color: ${color}`">
    <i class="icon-text-icon" v-html="iconContent" />
    <span class="icon-text-text">
      {{ text }}
    </span>
  </span>
</template>

<script>
import * as icons from "../../assets/svg/index";

export default {
  name: "IconText",
  props: {
    text: String,
    icon: String,
    color: String
  },
  computed: {
    iconContent: function () {
      return icons[this.icon];
    }
  }
};
</script>

<style scoped>
.icon-text {
  display: inline-flex;
}
.icon-text-icon {
  width: 1rem;
  height: 1rem;
}
.icon-text-text {
  font-size: 0.75rem;
  line-height: 1rem;
  padding-left: 0.5rem;
  color: var(--icon-text-color);
}
</style>
