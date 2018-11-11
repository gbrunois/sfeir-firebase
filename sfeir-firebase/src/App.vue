<template>
  <v-app>
    <v-toolbar app color="primary">
      <v-toolbar-title class="headline text-uppercase">
        <span>Rate a beer</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <v-btn slot="activator" dark icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile @click="login" v-if="!isAuthenticated">
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logout" v-if="isAuthenticated">
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import api from "@/api";

export default {
  name: "app",
  data() {
    return {
      isAuthenticated: api.isAuthenticated()
    };
  },
  methods: {
    login: function() {
      api.authenticate();
      this.$emit("loggedIn");
      this.isAuthenticated = true;
    },
    logout: function() {
      api.logout();
      this.$emit("loggedOut");
      this.isAuthenticated = false;
    }
  }
};
</script>
