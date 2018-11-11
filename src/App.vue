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
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
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
import authService from "@/api/auth.service.js";

export default {
  name: "app",
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
  methods: {
    login: function() {
      this.$router.push("login");
    },
    logout: function() {
      this.authService.logout();
    }
  }
};
</script>
