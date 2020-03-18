<template>
  <div class="card-container" @click="onClick">
    <div class="card-top-section">
      <img src="../assets/png/image.png" alt="food" />
      <div class="image-overlay"></div>
    </div>
    <div class="card-bottom-section"></div>
  </div>
</template>

<script>
export default {
  name: "PremiumRecipeCard",
  props: {
    onClick: Function
  }
};
</script>

<style scoped>
.card-container {
  width: 343px;
  height: 310px;
  background: #ffffff;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  margin: 0 auto;
}
.card-top-section {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  opacity: 1;
}
.card-top-section:hover {
  opacity: 0.8;
}
.image-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(22, 27, 35, 0.2) 70.94%,
    rgba(26, 29, 34, 0.79) 106.25%
  );
}
.card-bottom-section {
  width: 100%;
  height: 110px;
}
</style>
