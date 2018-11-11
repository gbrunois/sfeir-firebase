<template>
  <v-container>
    <section>
      <beer-list class="beer-list"></beer-list>
      <beer-input v-if="isAuthenticated"></beer-input>
    </section>
  </v-container>
</template>

<script>
import BeerList from "@/components/BeerList";
import BeerInput from "@/components/BeerInput";

import authService from "@/api/auth.service.js";

export default {
  name: "home",
  data: function() {
    return {
      authService: authService
    };
  },
  computed: {
    isAuthenticated() {
      return this.authService.isAuthenticated();
    }
  },
  components: {
    "beer-list": BeerList,
    "beer-input": BeerInput
  }
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  width: 100%;
  height: 100%;
}

.beer-list {
  margin-bottom: -150px;
}
</style>
