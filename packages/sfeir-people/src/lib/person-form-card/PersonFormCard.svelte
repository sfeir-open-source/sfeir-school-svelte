<script lang="ts">
	import Card from '$lib/card/Card.svelte';
	import TextField from '$lib/form/TextField.svelte';
	import Select from '$lib/form/Select.svelte';

	import { createEventDispatcher } from 'svelte';

	export let person: Person;

	const dispatch = createEventDispatcher();

	export const onFormSubmit = () => {
		dispatch('submit', person);
	};
</script>

<Card>
	<form on:submit|preventDefault={onFormSubmit}>
		<TextField bind:value={person.firstname} label="Firstname" />
		<TextField bind:value={person.lastname} label="Lastname" />
		<Select
			label="Position"
			bind:value={person.position}
			options={['Director', 'Developer', 'Product Owner', 'Sales', 'Human Resources']}
		/>
		<TextField bind:value={person.email} label="Email" />
		<TextField bind:value={person.phone} label="Phone" />
		<div class="buttons">
			<button type="submit" class="button is-primary">Submit</button>
		</div>
	</form>
</Card>
