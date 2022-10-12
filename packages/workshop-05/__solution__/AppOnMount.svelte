<script lang="ts">
	import { onMount } from 'svelte';

	import Header from '$common/components/header/Header.svelte';
	import HeaderMenu from '$common/components/header/HeaderMenu.svelte';
  import Loader from '$common/components/Loader.svelte';
	import PersonCard from '$common/components/person-card/PersonCard.svelte';
	import PeopleCarousel from '$common/components/people-carousel/PeopleCarousel.svelte';

	import { loadPeople } from '$common/utils';

	let currentPage: 'LIST' | 'CAROUSEL' = 'LIST';
	let people;

	const switchPage = (event) => {
		currentPage = event.detail;
	};

	onMount(async () => {
		people = await loadPeople();
	});
</script>

<Header>
	<HeaderMenu slot="menu" {currentPage} on:clickLink={switchPage} />
</Header>

<div class="container pt-6">
	{#if people}
		{#if currentPage === 'LIST'}
			<section class="section">
				<div class="columns is-multiline margin-medium">
					{#each people as person}
						<div class="column is-4">
							<PersonCard {person} />
						</div>
					{/each}
				</div>
			</section>
		{:else}
			<PeopleCarousel {people} />
		{/if}
	{:else}
    <Loader class="mt-6" />
	{/if}
</div>
