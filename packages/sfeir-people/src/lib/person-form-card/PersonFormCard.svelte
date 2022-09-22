<script lang="ts">
	import Card from '$lib/card/Card.svelte';
	import TextField from '$lib/form/TextField.svelte';
	import RadioGroup from '$lib/form/RadioGroup.svelte';

	import { createEventDispatcher } from 'svelte';

	export let person: Person;

	const dispatch = createEventDispatcher();

	export const onFormSubmit = () => {
		dispatch('submit', person);
	};
</script>

<Card>
	<form on:submit|preventDefault={onFormSubmit}>
		<TextField bind:value={person.firstname} id="firstName" label="Firstname" />
		<TextField bind:value={person.lastname} id="lastName" label="Lastname" />
		<RadioGroup
			bind:value={person.gender}
			label="Gender"
      id="gender"
			options={[
				{ value: 'm', label: 'Male' },
				{ value: 'f', label: 'Female' },
				{ value: 'o', label: 'Other' },
			]}
		/>
		<TextField bind:value={person.email} id="email" label="Email" />
		<TextField bind:value={person.phone} id="phone" label="Phone" />
    <div class="buttons">
      <button type="submit" class="button is-primary">Submit</button>
    </div>
	</form>
</Card>
