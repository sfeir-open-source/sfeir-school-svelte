<script lang="ts">
	import Header from '../../common/components/Header.svelte';
	import PersonCard from '../../common/components/person-card/PersonCard.svelte';

	import { loadPeople } from './../../common/utils';
</script>

<Header />

<section class="section">
	{#await loadPeople()}
		...loading
	{:then people}
		<div class="columns is-multiline margin-medium mt-4">
			{#each people as person}
				<div class="column is-4">
					<PersonCard {person} />
				</div>
			{/each}
		</div>
	{/await}
</section>
