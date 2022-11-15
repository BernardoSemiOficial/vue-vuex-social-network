<template>
  <i class="vheart" @click="handleHeart">
    <lottie-vue-player
      v-if="!isFavorite"
      class="heart"
      src="https://assets8.lottiefiles.com/private_files/lf30_2putscqk.json"
      :autoplay="false"
      :loop="false"
      :player-controls="false"
      :style="{
        width: iconWidth,
        height: iconHeight,
        background: tranparent,
      }"
    >
    </lottie-vue-player>
    <lottie-vue-player
      v-show="isFavorite"
      class="heart"
      src="https://assets8.lottiefiles.com/private_files/lf30_2putscqk.json"
      :autoplay="true"
      :loop="false"
      :player-controls="false"
      :style="{
        width: iconWidth,
        height: iconHeight,
        background: tranparent,
      }"
    >
    </lottie-vue-player>
    <span v-if="countFavorite > 0" class="count">{{ countFavorite }}</span>
  </i>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "VHeart",
  props: {
    countFavorite: {
      type: Number,
      default: 0,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    iconWidth: {
      type: String,
      default: "75px",
    },
    iconHeight: {
      type: String,
      default: "75px",
    },
    tranparent: {
      type: String,
      default: "transparent",
    },
  },
  methods: {
    handleHeart() {
      this.$emit("handle-heart");
    },
  },
});
</script>

<style scoped src="./VHeart.css" />
