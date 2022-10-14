<script lang="ts">
	import { onMount } from 'svelte';

	import Header from '$common/components/Header.svelte';
	import Loader from '$common/components/Loader.svelte';
	import PersonCard from '$common/components/person-card/PersonCard.svelte';
	import PersonForm from './PersonForm.svelte';

	import { loadPeople, savePerson } from '$common/utils';
	let editing: boolean = false;
	let person;

	onMount(async () => {
		person = await loadPeople().then((people) => people[Math.floor(Math.random() * people.length)]);
	});
</script>

<Header />

<section class="section">
	<br />
	<br />
	<p class="has-text-centered">
		Update the <strong>PersonForm</strong> component using events to update the
		<strong>person</strong>
		object<br />
		On submit, update the person using <strong>savePerson</strong> method
	</p>
	<br />
	<p class="has-text-centered">
		Finally replace the events with two way binding to manage the form data
	</p>
	<br />
	<br />

	{#if !person}
		<Loader class="mt-6" />
	{:else if editing}
		<PersonForm {person} on:cancel={() => (editing = false)} />
	{:else}
		<PersonCard {person} isEditable={true} on:edit={() => (editing = true)} />
	{/if}
</section>
