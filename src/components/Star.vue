<template>
  <span>
    <img :class="`star-${type}`" :src="fileName" :alt="type" />
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
    fileName: function() {
      const type = isValidStarType(this.type) ? this.type : 'full';
      return require(`../assets/svg/star-${type}.svg`);
    }
  }
};
</script>
