<script lang="ts">
	import Header from '../../common/components/Header.svelte';
	import PersonCard from './../../common/components/person-card/PersonCard.svelte';
	import PersonForm from './PersonForm.svelte';

	import { savePerson } from './../../common/utils';
	import { people } from '../../../data/people.json';

	let editing: boolean = false;
	let person: Person = people[Math.floor(Math.random() * people.length)];

	const handleSubmit = async (e) => {
		person = await savePerson(e.detail);
		editing = false;
	};
</script>

<Header />

<section class="section">
	{#if editing}
		<PersonForm {person} on:submit={handleSubmit} on:cancel={() => (editing = false)} />
	{:else}
		<PersonCard {person} isEditable={true} on:edit={() => (editing = true)} />
	{/if}
</section>
