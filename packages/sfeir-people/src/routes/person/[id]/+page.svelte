<script lang="ts">
	import PersonCard from '$lib/person-card/PersonCard.svelte';

	export let data: Person;
</script>

<div class="person-card-container">
	{#if data.id}
		<PersonCard person={data} isEditable={true} class="mt-5" />
	{:else}
		<p>
      <strong>Not found! </strong>
      <br />
      <a href="/list">Click here to go back to listing</a>
    </p>
	{/if}
</div>

<style>
	.person-card-container {
		max-width: 400px;
		margin: 0 auto;
	}

	.person-card-container p {
		margin-top: 2rem;
		text-align: center;
	}
</style>
