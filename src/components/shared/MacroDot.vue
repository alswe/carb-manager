<template>
  <span class="macro-dot">
    <span class="macro-dot-text" :style="`--dot-background-color: ${color}; --dot-text-color: ${textColor}`">
      {{ text }}
    </span>
  </span>
</template>

<script>
export default {
  name: "MacroDot",
  props: {
    color: String,
    text: String,
    textColor: String
  }
};
</script>

<style scoped>
.macro-dot >>> * {
  --macro-dot: 0.375rem;
}
.macro-dot-text {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  color: var(--dot-text-color);
}
.macro-dot-text::before {
  content: " ";
  height: var(--macro-dot);
  width: var(--macro-dot);
  background-color: var(--dot-background-color);
  border-radius: calc(var(--macro-dot) / 2);
  margin-right: 0.25rem;
}
</style>
