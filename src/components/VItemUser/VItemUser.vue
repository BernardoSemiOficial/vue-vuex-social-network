<template>
  <li>
    <img v-if="user.photo" :src="user.photo" :alt="user.name" />
    <p v-if="user.name">{{ user.name }}</p>
    <span>
      <VHeart :isFavorite="favorite" @handle-heart="handleClickHeart" />
    </span>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { mapActions } from "vuex";
import VHeart from "../VHeart/VHeart.vue";
import { User } from "../../models/User";

export default defineComponent({
  components: { VHeart },
  name: "VItemUser",
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  data() {
    return {
      favorite: this.user.favorite,
    };
  },
  methods: {
    ...mapActions({
      handleFavorite: "setUserFavorite",
    }),
    handleClickHeart() {
      this.handleFavorite(this.user);
    },
  },
});
</script>

<style scoped src="./VItemUser.css" />
