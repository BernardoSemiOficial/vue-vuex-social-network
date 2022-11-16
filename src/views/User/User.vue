<template>
  <section class="users">
    <h1>users</h1>
    <VListUser :users="users" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import VListUser from "../../components/VListUser/VListUser.vue";

export default defineComponent({
  name: "VUser",
  components: {
    VListUser,
  },
  computed: {
    ...mapState({
      users: "users",
    }),
  },
});
</script>

<style scoped src="./User.css" />
