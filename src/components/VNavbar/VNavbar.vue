<template>
  <nav class="vnavbar">
    <router-link to="/">User</router-link>
    <router-link to="/favorite">Favorite</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "VNavbar",
});
</script>

<style scoped src="./VNavbar.css" />
