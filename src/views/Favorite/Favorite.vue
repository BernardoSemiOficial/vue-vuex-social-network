<template>
  <section class="favorites">
    <h1>favorites</h1>
    <VListUser />
  </section>
</template>

<script>
import { defineComponent } from "vue";
import VListUser from "../../components/ListUser/ListUser.vue";

export default defineComponent({
  name: "VFavorite",
  components: {
    VListUser,
  },
});
</script>

<style scoped src="./Favorite.css" />
