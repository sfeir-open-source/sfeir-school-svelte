<script lang="ts">
	import PersonCard from '../person-card/PersonCard.svelte';

	export let people: People = undefined;
</script>

<div class="mdl-grid">
	{#each people as person}
		<div class="mdl-cell-4 mdl-cell-6-tablet mdl-cell-12-phone">
			<PersonCard {person} />
		</div>
	{/each}
</div>

<style>
  .mdl-grid {
    justify-content: center;
    gap: 30px;
  }
</style>
