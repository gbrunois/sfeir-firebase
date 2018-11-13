<template>
    <v-dialog v-model="dialog" width="300" lazy>
        <v-card class="elevation-16 mx-auto" width="300">
            <v-card-title class="headline" primary-title>
                Rate {{ beer.name }}
            </v-card-title>
            <v-card-text>
                <div class="text-xs-center mt-5">
                    <v-rating v-model="rating" color="yellow darken-3" background-color="grey darken-1" empty-icon="$vuetify.icons.ratingFull" half-increments hover></v-rating>
                </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="justify-space-between">
                <v-btn flat @click="closePopup()">No Thanks</v-btn>
                <v-btn color="primary" flat @click="rateBeer()">
                    Rate Now
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
 <script>
import databaseService from "@/api/database.service";
import authService from "@/api/auth.service";
export default {
  name: "beerRateDialog",
  props: ["active", "beer"],
  data() {
    return {
      rating: 0
    };
  },
  computed: {
    dialog: {
      get: function() {
        return this.active;
      },
      set: function(value) {
        if (!value) {
          this.$emit("close");
        }
      }
    }
  },
  methods: {
    rateBeer() {
      databaseService.rateBeer(
        this.rating,
        this.beer,
        authService.getLoggedUser()
      );
      this.dialog = false;
    },
    closePopup() {
      this.dialog = false;
    }
  }
};
</script>
