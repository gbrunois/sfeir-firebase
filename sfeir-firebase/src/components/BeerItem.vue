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
            Rate this beer
            <v-spacer></v-spacer>
            <rate></rate>
        </v-card-actions>
    </v-card>
</template>

<script>
import Rate from "@/components/components/Rate";

export default {
  name: "beer-item",
  props: ["beer"],
  components: {
    rate: Rate
  }
};
</script>
