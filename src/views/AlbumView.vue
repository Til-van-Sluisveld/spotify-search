<script>
import { useSpotifyAccessToken } from "../stores/store";
const store = useSpotifyAccessToken();

export default {
  data() {
    return {
      albumToFind: "",
      albums: [],
    };
  },
  methods: {
    async searchAlbum() {
      var searchParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.token,
        },
      };

      this.albums = await fetch(
        "https://api.spotify.com/v1/search?q=" +
          this.albumToFind +
          "&type=album",
        searchParameters
      )
        .then((response) => response.json())
        .then((data) => {
          return data.albums.items;
        });
    },
  },
};
</script>

<template>
  <v-container>
    <v-row>
      <h1 class="px-3 green">Search Album:</h1>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field v-model="albumToFind" />
      </v-col>
      <v-col class="pt-6">
        <v-btn color="hsla(160, 100%, 37%, 1)" @click="searchAlbum">Find</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-card
        class="ma-2"
        color="#222222"
        width="200px"
        v-for="album in albums"
        v-bind:key="album.id"
      >
        <v-img :src="album.images[0]?.url" height="150px" cover> </v-img>
        <v-card-title color="#2c3e50">
          <p class="green text-truncate">{{ album.name }}</p>
        </v-card-title>
      </v-card>
    </v-row>
  </v-container>
</template>
