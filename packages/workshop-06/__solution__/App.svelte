<script lang="ts">
	import { onMount } from 'svelte';

	import Header from '$common/components/header/Header.svelte';
	import HeaderMenu from '$common/components/header/HeaderMenu.svelte';
  import Loader from '$common/components/Loader.svelte';

  import ListPage from "./ListPage.svelte";
  import CarouselPage from "./CarouselPage.svelte";

  import { isPeopleLoading, refreshPeople } from './people.store';

	let currentPage: 'LIST' | 'CAROUSEL' = 'LIST';

	const switchPage = (event) => currentPage = event.detail;

	onMount(() => {
		refreshPeople();
	});

  $: CurrentView = currentPage === 'LIST' ? ListPage : CarouselPage;
</script>

<Header>
	<HeaderMenu slot="menu" {currentPage} on:clickLink={switchPage} />
</Header>

<div class="container pt-6">
	{#if $isPeopleLoading}
    <Loader class="mt-6" />
	{:else}
    <svelte:component this={CurrentView} />
	{/if}
</div>
