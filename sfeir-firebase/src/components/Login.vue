
<template>
    <v-card>
        <v-card-title>
            <div mat-card-avatar>
                <img *ngIf="user.photoURL" [src]="user.photoURL">
            </div>
            <mat-card-title>{{user.displayName}}</mat-card-title>
            <mat-card-subtitle>{{user.email}}</mat-card-subtitle>
        </v-card-title>
        <v-card-text>
            <v-form>
                <p>Use your email/password to sign in</p>

                <v-text-field [(ngModel)]="userCred.email" matInput placeholder="User email" type="email"></v-text-field>

                <v-text-field [(ngModel)]="userCred.password" type="password" matInput placeholder="User password"></v-text-field>

                <button class="login-btn email" mat-button (click)="authService.login('email', userCred)">Sign In</button>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <button (click)="authService.logout()" mat-button *ngIf="user; else LoginTpl">Logout</button>
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
