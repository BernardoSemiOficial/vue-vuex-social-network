<template>
  <ul class="list-user">
    <VItemUser v-for="user in users" :key="user.id" :user="user" />
  </ul>
</template>

<script>
import { defineComponent } from "vue";
import VItemUser from "../VItemUser/VItemUser.vue";

export default defineComponent({
  components: { VItemUser },
  name: "VListUser",
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Bernardo Pereira",
          photo:
            "https://veja.abril.com.br/wp-content/uploads/2017/05/ayrton-senna.jpg?quality=70&strip=info&w=1024&resize=1200,800",
        },
        {
          id: 2,
          name: "Bernardo Pereira",
          photo:
            "https://veja.abril.com.br/wp-content/uploads/2017/05/ayrton-senna.jpg?quality=70&strip=info&w=1024&resize=1200,800",
        },
        {
          id: 3,
          name: "Bernardo Pereira",
          photo:
            "https://veja.abril.com.br/wp-content/uploads/2017/05/ayrton-senna.jpg?quality=70&strip=info&w=1024&resize=1200,800",
        },
      ],
    };
  },
});
</script>

<style scoped src="./VListUser.css" />
