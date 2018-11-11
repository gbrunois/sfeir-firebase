<template>
  <v-container fluid grid-list-lg>
    <section>
      <v-layout row wrap>
        <v-flex xs12 v-for="(beer) in beers" :key="beer.key">
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
      beers: []
    };
  },
  mounted: function() {
    databaseService.getBeers(
      onAddNewBeer(this),
      onUpdateBeer(this),
      onDeleteBeer(this)
    );
  },
  components: {
    "beer-item": BeerItem
  }
};

function onAddNewBeer(vm) {
  return newBeer => {
    vm.beers.push(newBeer);
  };
}
function onUpdateBeer(vm) {
  return beer => {
    const index = vm.beers.findIndex(b => b.key === beer.key);
    if (index !== -1) {
      Object.assign(vm.beers[index], beer);
    }
  };
}

function onDeleteBeer(vm) {
  return beer => {
    const index = vm.beers.findIndex(b => b.key === beer.key);
    if (index !== -1) {
      vm.beers(index, 1);
    }
  };
}
</script>

<style scoped>
section {
  height: 100%;
  margin-bottom: 60px;
}
</style>
