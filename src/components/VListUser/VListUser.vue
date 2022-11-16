<template>
  <ul class="list-user">
    <VItemUser v-for="user in users" :key="user.id" :user="user" />
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User } from "../../models/User";
import VItemUser from "../VItemUser/VItemUser.vue";

export default defineComponent({
  components: { VItemUser },
  name: "VListUser",
  props: {
    users: {
      type: Array as PropType<User[]>,
      required: true,
    },
  },
});
</script>

<style scoped src="./VListUser.css" />
