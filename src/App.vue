<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Greeting from "./components/Greeting.vue";
import { useSpotifyAccessToken } from "./stores/store";

const store = useSpotifyAccessToken();
const CLIENT_ID = "aeadfc29af914c62b5e6b3f3b61229d9";
const CLIENT_SECRET = "66b59d4f9e2146b8a3298dacd8c644c3";

var authParameters = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body:
    "grant_type=client_credentials&client_id=" +
    CLIENT_ID +
    "&client_secret=" +
    CLIENT_SECRET,
};
fetch("https://accounts.spotify.com/api/token", authParameters)
  .then((result) => result.json())
  .then((data) => store.$patch({ token: data.access_token }));
</script>

<template>
  <header>
    <img
      alt="Spotify logo"
      class="logo"
      src="@/assets/logo.png"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <Greeting msg="Spotify search!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/track">Track</RouterLink>
        <RouterLink to="/artist">Artist</RouterLink>
        <RouterLink to="/album">Album</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
