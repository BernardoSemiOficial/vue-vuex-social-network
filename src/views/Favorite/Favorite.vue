<template>
  <section class="favorites">
    <h1>favorites</h1>
    <VListUser :users="users" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import VListUser from "../../components/VListUser/VListUser.vue";

export default defineComponent({
  name: "VFavorite",
  components: {
    VListUser,
  },
  computed: {
    ...mapState({
      users: "usersFavorites",
    }),
  },
});
</script>

<style scoped src="./Favorite.css" />
