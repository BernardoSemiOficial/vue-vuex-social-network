<template>
  <div>
    <VHeader>
      <VNavbar slot="navbar" />
      <VHeart
        slot="heart"
        icon-width="90px"
        icon-height="90px"
        :count-favorite="count"
      />
    </VHeader>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import VHeader from "./components/VHeader/VHeader.vue";
import VHeart from "./components/VHeart/VHeart.vue";
import VNavbar from "./components/VNavbar/VNavbar.vue";

export default defineComponent({
  name: "VApp",
  components: {
    VNavbar,
    VHeart,
    VHeader,
  },
  computed: {
    ...mapGetters({
      count: "countFavorites",
    }),
  },
  methods: {
    ...mapActions({
      fetchUsers: "fetchUsers",
    }),
  },
  mounted() {
    this.fetchUsers();
  },
});
</script>
