<template>
  <div class="beer-input">
    <v-text-field class="input" placeholder="please enter a beer here" type="text" v-model="beerName"></v-text-field>
    <v-btn @click="add">
      <v-icon>send</v-icon>
    </v-btn>
  </div>
</template>

<script>
import databaseService from "@/api/databaseService";

export default {
  name: "beer-input",
  data: function() {
    return {
      beerName: ""
    };
  },
  methods: {
    add: function() {
      databaseService.addNewBeer(this.beerName);
      this.beerName = "";
    }
  }
};
</script>

<style scoped>
.beer-input {
  padding: 0px 9px;
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: -1px;
  background-color: white;
}

.input {
  width: 90%;
}
</style>
