<script lang="ts">
  import { nameContains } from '$common/utils';
	import TextField from '$lib/form/TextField.svelte';
	import PersonCard from '$lib/person-card/PersonCard.svelte';

	export let people: People = undefined;

	let query = '';

	$: filteredPeople = people.filter(nameContains(query));
</script>

<div class="columns is-multiline margin-medium mt-4">
	{#each filteredPeople as person}
		<div class="column is-4">
			<PersonCard {person} />
		</div>
	{/each}
</div>

<footer class="box">
	<TextField bind:value={query} placeholder="Search by name" iconRight="search"/>
</footer>

<style>
  footer{
    min-width: 24rem;
    position: fixed;
    bottom: 1.6rem;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
