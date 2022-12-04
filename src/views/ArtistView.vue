<script>
import { useSpotifyAccessToken } from "../stores/store";
const store = useSpotifyAccessToken();

export default {
  data() {
    return {
      artistToFind: "",
      artists: [],
    };
  },
  methods: {
    async searchArtist() {
      var searchParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.token,
        },
      };
      //Get ArtistID from Spotify
      this.artists = await fetch(
        "https://api.spotify.com/v1/search?q=" +
          this.artistToFind +
          "&type=artist",
        searchParameters
      )
        .then((response) => response.json())
        .then((data) => {
          return data.artists.items;
        });
    },
  },
};
</script>

<template>
  <v-container>
    <v-row>
      <h1 class="px-3 green">Search Artist:</h1>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field v-model="artistToFind" />
      </v-col>
      <v-col class="pt-6">
        <v-btn color="hsla(160, 100%, 37%, 1)" @click="searchArtist"
          >Find</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-card
        class="ma-2"
        color="#222222"
        width="200px"
        v-for="artist in artists"
        v-bind:key="artist.id"
      >
        <v-img :src="artist.images[0]?.url" height="150px" cover> </v-img>
        <v-card-title color="#2c3e50">
          <p class="green text-truncate">{{ artist.name }}</p>
        </v-card-title>
      </v-card>
    </v-row>
  </v-container>
</template>
