<template>
  <v-container fluid grid-list-lg>
    <section>
      <v-layout row wrap>
        <v-flex xs12 v-for="(beer) in beers" :key="beer.id">
          <beer-item :beer="beer"></beer-item>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
import databaseService from "@/api/database.service";
import BeerItem from "@/components/BeerItem";

export default {
  name: "beer-list",
  data: function() {
    return {
      beers: databaseService.getBeers()
    };
  },
  components: {
    "beer-item": BeerItem
  }
};
</script>

<style scoped>
section {
  height: 100%;
  margin-bottom: 60px;
}
</style>
