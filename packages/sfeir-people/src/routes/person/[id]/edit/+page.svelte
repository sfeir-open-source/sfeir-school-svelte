<script lang="ts">
	import PersonFormCard from '$lib/person-form-card/PersonFormCard.svelte';

	export let data: Person;

	const onSubmit = () => {
		console.log('onSubmit');
	};
</script>

<div class="mdl-grid">
	<PersonFormCard person={data} on:submit={onSubmit} />
</div>

<style>
	.mdl-grid {
    padding: 20px;
		justify-content: center;
	}
</style>
