<script lang="ts">
	import Card from '$common/components/Card.svelte';
	import TextField from '$common/components/form/TextField.svelte';
	import Select from '$common/components/form/Select.svelte';

	import { createEventDispatcher } from 'svelte';

	export let person: Person;

	const dispatch = createEventDispatcher();

	export const onFormSubmit = () => {
		dispatch('submit', person);
	};
</script>

<Card>
	<form on:submit|preventDefault={onFormSubmit} action="#">
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
			<button type="button" class="button is-secondary" on:click={() => dispatch('cancel')}>
				Cancel
			</button>
		</div>
	</form>
</Card>
