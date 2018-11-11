
<template>
    <v-card>
        <v-card-title>
            <div >
                
            </div>

        </v-card-title>
        <v-card-text>
            <v-form>
                <p>Use your email/password to sign in</p>

                <v-text-field placeholder="User email" type="email"></v-text-field>

                <v-text-field type="password" placeholder="User password"></v-text-field>

                <button class="login-btn email">Sign In</button>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <button>Logout</button>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: "login",
  data: function() {
    return {};
  },
  methods: {}
};
</script>
