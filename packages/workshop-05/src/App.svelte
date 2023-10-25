<script lang="ts">
	import Header from '$common/components/header/Header.svelte';
	import HeaderMenu from '$common/components/header/HeaderMenu.svelte';
	// import Loader from '$common/components/Loader.svelte';
	import PersonCard from '$common/components/person-card/PersonCard.svelte';
	import PeopleCarousel from '$common/components/people-carousel/PeopleCarousel.svelte';

	// import { loadPeople } from '$common/utils';
	import { people } from '../../../data/people.json';

	let currentPage: 'LIST' | 'CAROUSEL' = 'LIST';

	const switchPage = (event) => {
		currentPage = event.detail;
	};
</script>

<Header>
	<HeaderMenu slot="menu" {currentPage} on:clickLink={switchPage} />
</Header>

<section class="section">
	<div class="container">
		<p class="has-text-centered">
			Use <strong>onMount</strong> lifecycle method to load people data over the network
		</p>
		<br />
		<p class="has-text-centered">
			Bonus : replace <strong>onMount</strong> with <strong>await</strong> block
		</p>

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
	</div>
</section>
