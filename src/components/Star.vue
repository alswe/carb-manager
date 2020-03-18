<template>
  <span>
    <img :class="`star-${type}`" :src="iconPath" :alt="type" />
  </span>
</template>

<script>
import { isValidStarType } from "../utils";

export default {
  name: "Star",
  props: {
    type: {
      type: String,
      validator: isValidStarType
    }
  },
  computed: {
    iconPath: function() {
      const type = isValidStarType(this.type) ? this.type : 'full';
      return require(`../assets/svg/star-${type}.svg`);
    }
  }
};
</script>
