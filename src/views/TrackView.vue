<script>
import { useSpotifyAccessToken } from "../stores/store";
const store = useSpotifyAccessToken();

export default {
  data() {
    return {
      trackToFind: "",
      tracks: [],
    };
  },
  methods: {
    async searchtrack() {
      var searchParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.token,
        },
      };
      //Get trackID from Spotify
      this.tracks = await fetch(
        "https://api.spotify.com/v1/search?q=" +
          this.trackToFind +
          "&type=track",
        searchParameters
      )
        .then((response) => response.json())
        .then((data) => {
          return data.tracks.items;
        });
    },
  },
};
</script>

<template>
  <v-container>
    <v-row>
      <h1 class="px-3 green">Search Track:</h1>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field v-model="trackToFind" />
      </v-col>
      <v-col class="pt-6">
        <v-btn color="hsla(160, 100%, 37%, 1)" @click="searchtrack">Find</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-card
        class="ma-2"
        color="#222222"
        width="200px"
        v-for="track in tracks"
        v-bind:key="track.id"
      >
        <v-img :src="track.album?.images[0]?.url" height="150px" cover> </v-img>
        <v-card-title color="#2c3e50">
          <p class="green text-truncate">{{ track.name }}</p>
        </v-card-title>
      </v-card>
    </v-row>
  </v-container>
</template>
