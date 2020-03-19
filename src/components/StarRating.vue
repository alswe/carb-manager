<template>
  <div>
    <span class="star-rating-star" v-for="(star, index) in stars" :key="index">
      <Star :type="star" />
    </span>
  </div>
</template>

<script>
import Star from "./Star";
import { getValidScore } from "../utils";

export default {
  name: "StarRating",
  components: {
    Star
  },
  props: {
    score: {
      type: Number,
      default: 5
    }
  },
  computed: {
    stars: function() {
      let score = getValidScore(this.score);
      return this.makeStarList(score);
    }
  },
  methods: {
    makeStarList: function(score) {
      let stars = [];
      for (let i = 0; i < 5; i++) {
        const min = i + 0.25;
        const max = i + 0.75;
        if (score < min) {
          stars.push("empty");
        } else if (score >= min && score <= max) {
          stars.push("half");
        } else {
          stars.push("full");
        }
      }
      return stars;
    }
  }
};
</script>

<style scoped>
.star-rating-star {
  padding-right: 1.69px;
}
</style>
