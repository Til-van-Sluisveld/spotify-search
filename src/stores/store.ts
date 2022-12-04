import { defineStore } from "pinia";

export const useSpotifyAccessToken = defineStore("spotifyAccessToken", {
  state: () => ({
    token: "",
  }),
});
