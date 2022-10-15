<script lang="ts">
  import { nameContains } from '$common/utils';
	import TextField from '$common/components/form/TextField.svelte';
	import PersonCard from '$common/components/person-card/PersonCard.svelte';

	export let people: People = undefined;

	/**
   * Attach a query string to TextField component and filter displayed people
   * Hint: use nameContains to filter people with query
  */
</script>

<div class="columns is-multiline margin-medium mt-4">
	{#each people as person}
		<div class="column is-4">
			<PersonCard {person} isEditable={true} />
		</div>
	{/each}
</div>

<footer class="box">
	<TextField placeholder="Search by name" iconRight="search"/>
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
