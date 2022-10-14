<script lang="ts">
  import { onMount } from 'svelte';

	import Header from '$common/components/Header.svelte';
	import Loader from '$common/components/Loader.svelte';
	import PersonCard from '$common/components/person-card/PersonCard.svelte';
	import PersonForm from './PersonForm.svelte';

	import { loadPeople, savePerson } from '$common/utils';

	let editing: boolean = false;
  let person;

	const handleSubmit = async (e) => {
		person = await savePerson(e.detail);
		editing = false;
	};

  onMount(async () => {
    person = await loadPeople().then((people) => people[Math.floor(Math.random() * people.length)]);
  })
</script>

<Header />

<section class="section">
	{#if !person}
		<Loader class="mt-6" />
	{:else}
		{#if editing}
			<PersonForm {person} on:submit={handleSubmit} on:cancel={() => (editing = false)} />
		{:else}
			<PersonCard {person} isEditable={true} on:edit={() => (editing = true)} />
		{/if}
	{/if}
</section>
