<script lang="ts">
	import { onMount } from 'svelte';

	import Header from '$common/components/header/Header.svelte';
	import HeaderMenu from '$common/components/header/HeaderMenu.svelte';
	import Loader from '$common/components/Loader.svelte';

	import { loadPeople } from '$common/utils';
  import PeopleCarousel from '$common/components/people-carousel/PeopleCarousel.svelte';
  import PersonList from '$lib/PersonList.svelte';

	type Pages = 'LIST' | 'CAROUSEL';

	let people: People = [];
	let currentPage: Pages = 'LIST';

	const switchPage = (event) => (currentPage = event.detail);

	onMount(() => {

    /**
     * Here you should redirect to list page by using window.location.href
    */

    // This should be loaded in pages directly
    // Hint: you can use "+page.ts" (a server file) to load data for you "+page.svelte" page
		loadPeople().then((data) => (people = data));
	});
</script>

<!-- Create a SvelteKit layout to display the header and container div using slot -->

<Header>
	<HeaderMenu slot="menu" {currentPage} on:clickLink={switchPage} />
</Header>

<div class="container">

  <!-- Use SvelteKit router system to handle this routing -->
  <!-- Bonus: create an other route /person/{id} to display only one person -->

	{#if people.length === 0}
		<Loader class="mt-6" />
	{:else if currentPage === 'LIST'}
		<PersonList people={people} />
	{:else}
		<PeopleCarousel people={people} />
	{/if}
</div>
