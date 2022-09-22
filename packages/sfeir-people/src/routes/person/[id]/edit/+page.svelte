<script lang="ts">
	import { goto } from '$app/navigation';

	import PersonFormCard from '$lib/person-form-card/PersonFormCard.svelte';
	import { savePerson } from '$common/utils';

	export let data;

	const onSubmit = async (e) => {
		await savePerson(e.detail).then(() => {
			goto(`/person/${data.person.id}`);
		});
	};
</script>

<div class="mdl-grid">
	<PersonFormCard person={data.person} on:submit={onSubmit} />
</div>

<style>
	.mdl-grid {
		padding: 20px;
		justify-content: center;
	}
</style>
