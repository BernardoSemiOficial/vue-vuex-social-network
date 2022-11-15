<template>
  <section class="vheader">
    <slot name="navbar" />
    <slot name="heart" />
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "VHeader",
});
</script>

<style scoped src="./VHeader.css" />
