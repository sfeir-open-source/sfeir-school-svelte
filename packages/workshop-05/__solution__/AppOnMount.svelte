<script lang="ts">
	import { onMount } from 'svelte';

	import Header from '../../common/components/Header.svelte';
	import PersonCard from '../../common/components/person-card/PersonCard.svelte';

	import { loadPeople } from './../../common/utils';

	let people;

	onMount(async () => {
		people = await loadPeople();
	});
</script>

<Header />

<section class="section">
	{#if people}
		<div class="columns is-multiline margin-medium mt-4">
			{#each people as person}
				<div class="column is-4">
					<PersonCard {person} />
				</div>
			{/each}
		</div>
	{:else}
		loading...
	{/if}
</section>
