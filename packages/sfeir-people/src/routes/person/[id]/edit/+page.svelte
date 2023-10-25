<script lang="ts">
	import { goto } from '$app/navigation';

	import PersonFormCard from '$lib/person-form-card/PersonFormCard.svelte';
	import { savePerson } from '$common/utils';

	export let data: Person;

	const onSubmit = async (e) => {
		await savePerson(e.detail).then(() => {
			goto(`/person/${data.id}`);
		});
	};
</script>

<svelte:head>
  <title>SFEIR People - ✏️ {data.firstname} {data.lastname}</title>
</svelte:head>

<div class="mdl-grid">
	<PersonFormCard person={data} on:submit={onSubmit} />
</div>

<style>
	.mdl-grid {
		padding: 20px;
		justify-content: center;
	}
</style>
