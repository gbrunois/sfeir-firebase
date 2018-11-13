<template>
    <v-card>
        <v-layout row>
            <v-flex xs7>
                <v-card-title primary-title>
                    <div>
                        <div class="headline">{{ beer.name }}</div>
                    </div>
                </v-card-title>
            </v-flex>
            <v-flex xs5>
                <v-img :src="beer.imageUrl" height="125px" contain></v-img>
            </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions class="pa-3">
            <v-rating v-model="beer.rate" half-increments readonly></v-rating>
            <v-spacer></v-spacer>
            <v-btn fab dark small color="primary" @click="openRatePopup()" v-if="isAuthenticated">
                <v-icon dark>favorite</v-icon>
            </v-btn>
            <beer-rate-dialog :active="dialog" :beer="beer" @close="onDialogClosed()"></beer-rate-dialog>
        </v-card-actions>
    </v-card>
</template>

<script>
import beerRateDialog from "@/components/BeerRateDialog";
import authService from "@/api/auth.service.js";

export default {
  name: "beer-item",
  props: ["beer"],
  data() {
    return {
      authService: authService,
      dialog: false
    };
  },
  computed: {
    isAuthenticated() {
      return this.authService.isAuthenticated();
    }
  },
  methods: {
    openRatePopup() {
      this.dialog = true;
    },
    onDialogClosed() {
      this.dialog = false;
    }
  },
  components: {
    "beer-rate-dialog": beerRateDialog
  }
};
</script>
