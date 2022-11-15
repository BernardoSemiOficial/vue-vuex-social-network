<template>
  <li>
    <img v-if="user.photo" :src="user.photo" :alt="user.name" />
    <p v-if="user.name">{{ user.name }}</p>
    <span>
      <VHeart :isFavorite="favorite" @handle-heart="handleClickHeart" />
    </span>
  </li>
</template>

<script>
import { defineComponent } from "vue";
import VHeart from "../VHeart/VHeart.vue";

export default defineComponent({
  components: { VHeart },
  name: "VItemUser",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      favorite: false,
    };
  },
  methods: {
    handleClickHeart() {
      this.favorite = !this.favorite;
    },
  },
});
</script>

<style scoped src="./VItemUser.css" />
