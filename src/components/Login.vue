<template>
  <v-card>
    <v-card-text>
      <p>Use your email/password to sign in</p>
      <v-text-field placeholder="User email" type="email" v-model="email"></v-text-field>
      <v-text-field type="password" placeholder="User password" v-model="password"></v-text-field>
      <v-btn class="login-btn email" @click="loginByEmail()">Sign In</v-btn>
    </v-card-text>
    <v-card-actions>
      <v-layout row>
        <v-btn class="login-btn google" @click="loginWithGoogle()">Login with Google</v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
import authService from "@/api/auth.service.js";

export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    loginWithGoogle: async function() {
      await authService.authenticate("google");
      this.$router.push({ name: "home" });
    },
    loginByEmail: async function() {
      await authService.authenticate("email", {
        email: this.email,
        password: this.password
      });
      if (authService.isAuthenticated()) {
        this.$router.push({ name: "home" });
      }
    }
  }
};
</script>
