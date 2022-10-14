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

	const handleChange = (field: string) => (event: CustomEvent<string>) => {
		person[field] = event.detail;
	};
</script>

<Card>
	<form on:submit|preventDefault={onFormSubmit} action="#">
		<TextField value={person.firstname} label="Firstname" on:change={handleChange('firstname')} />
		<TextField value={person.lastname} label="Lastname" on:change={handleChange('lastname')} />
		<Select
			label="Position"
			value={person.position}
			options={['Director', 'Developer', 'Product Owner', 'Sales', 'Human Resources']}
			on:change={handleChange('position')}
		/>
		<TextField value={person.email} label="Email" on:change={handleChange('email')} />
		<TextField value={person.phone} label="Phone" on:change={handleChange('phone')} />
		<div class="buttons">
			<button type="submit" class="button is-primary">Submit</button>
			<button type="button" class="button is-secondary" on:click={() => dispatch('cancel')}>
				Cancel
			</button>
		</div>
	</form>
</Card>
