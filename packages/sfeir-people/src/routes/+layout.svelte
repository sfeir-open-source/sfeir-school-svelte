<script lang="ts">
	import Header from '$lib/header/Header.svelte';
  import HeaderMenu from '$lib/header/header-menu/HeaderMenu.svelte';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
  <script src="https://kit.fontawesome.com/ea210a45ce.js" crossorigin="anonymous"></script>
</svelte:head>

<Header>
  <HeaderMenu slot="menu" currentPage={$page.url.pathname} />
</Header>

<div class="container">
  <slot/>
</div>

<style>
  .container {
    padding: 0 2rem;
  }
</style>
