<script lang="ts">
	import { onMount } from 'svelte';

	import Header from '$common/components/header/Header.svelte';
	import HeaderMenu from '$common/components/header/HeaderMenu.svelte';
	import Loader from '$common/components/Loader.svelte';
	import { loadPeople } from '$common/utils';

	import { isPeopleLoading } from './people.store';

	let currentPage: 'LIST' | 'CAROUSEL' = 'LIST';

	const switchPage = (event) => (currentPage = event.detail);

	onMount(async () => {
		// loadPeople();
	});

	$: CurrentView = null;
</script>

<Header>
	<HeaderMenu slot="menu" {currentPage} on:clickLink={switchPage} />
</Header>

<div class="container pt-6">
	{#if isPeopleLoading}
		<Loader class="mt-6" />
	{:else}
		<p>
			Update ListPage & CarouselPage to use people store, and use "svelte:component" special element
			to switch between with "CurrentView"
			<br />
			<br />
			Note: ListPage & CarouselPage should not have props, use people store instead.
		</p>
	{/if}
</div>
