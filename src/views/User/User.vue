<template>
  <section class="users">
    <h1>users</h1>
    <VListUser />
  </section>
</template>

<script>
import { defineComponent } from "vue";
import VListUser from "../../components/VListUser/VListUser.vue";

export default defineComponent({
  name: "VUser",
  components: {
    VListUser,
  },
});
</script>

<style scoped src="./User.css" />
