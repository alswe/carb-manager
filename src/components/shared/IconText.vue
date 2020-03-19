<template>
  <span class="icon-text">
    <img class="icon-text-icon" :src="iconPath" :alt="icon" />
    <span class="icon-text-text">
      {{ text }}
    </span>
  </span>
</template>

<script>
export default {
  name: "IconText",
  props: {
    text: String,
    icon: String
  },
  computed: {
    iconPath: function() {
      return require(`../../assets/svg/${this.icon}`);
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
  color: #393c40;
}
</style>
