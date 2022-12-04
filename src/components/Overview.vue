<script setup lang="ts">
import Item from "./Item.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <Item>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Todo: Refactor duplicate code</template>
    The three main views have a lot of duplicate code which could be refactored
  </Item>

  <Item>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Todo: Add web players </template>
    Add two web players and a motherf*cking crossfader as tribute to
    <a
      href="http://twoyoutubevideosandamotherfuckingcrossfader.com/"
      target="_blank"
      rel="noopener"
      >this legendary site</a
    >.
  </Item>

  <Item>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Todo: Integrate searchtypes</template>
    The track, artist and search pages should be integrated so they can flow
    into each other
  </Item>

  <Item>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Todo: detail cards</template>
    Expand on initial search results and use additional data from API to create
    detailed views
  </Item>

  <Item>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Todo: Improve UI</template>
    Improve UI of search pages and of the header.
  </Item>
</template>
