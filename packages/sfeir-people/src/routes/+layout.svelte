<script lang="ts">
	import Header from '$lib/header/Header.svelte';
  import HeaderMenu from '$lib/header/header-menu/HeaderMenu.svelte';
  import { page } from '$app/stores';
</script>

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
