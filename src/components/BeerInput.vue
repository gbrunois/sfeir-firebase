<template>
  <form enctype="multipart/form-data" novalidate class="beer-input">
    <v-btn @click="$refs.fileInput.click()">
      <v-icon>launch</v-icon>
    </v-btn>
    <img v-if="blobUrl" :src="blobUrl">
    <input type="file" name="file" hidden accept="image/*" @change="onFileSelected($event)" ref="fileInput" />
    <v-text-field class="input" placeholder="please enter a beer here" type="text" v-model="beerName"></v-text-field>
    <v-btn @click="add">
      <v-icon>send</v-icon>
    </v-btn>
  </form>
</template>

<script>
import databaseService from "@/api/database.service";
import storageService from "@/api/storage.service";

export default {
  name: "beer-input",
  data: function() {
    return {
      beerName: "",
      blobUrl: ""
    };
  },
  methods: {
    add: async function() {
      let imageUrl = "";
      if (this.file) {
        imageUrl = await storageService.store({
          file: this.file,
          metadata: {
            contentType: this.file.type
          }
        });
      }
      await databaseService.addNewBeer({
        name: this.beerName,
        imageUrl
      });
      this.beerName = "";
      this.blobUrl = "";
    },
    onFileSelected(changeEvent) {
      changeEvent.stopPropagation();
      changeEvent.preventDefault();
      this.file = changeEvent.target.files[0];
      this.blobUrl = URL.createObjectURL(this.file);
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

img {
  width: 45px;
  height: 45px;
  margin: 3px 5px;
}
</style>
