<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Card from '$common/components/Card.svelte';
	import TextField from '$common/components/form/TextField.svelte';
	import Select from '$common/components/form/Select.svelte';

	const dispatch = createEventDispatcher();

	// export let person: Person;
</script>

<Card>
	<form>
		<TextField label="Firstname" />
		<TextField label="Lastname" />
		<Select
			label="Position"
			options={['Director', 'Developer', 'Product Owner', 'Sales', 'Human Resources']}
		/>
		<TextField label="Email" />
		<TextField label="Phone" />
		<div class="buttons">
			<button type="submit" class="button is-primary">Submit</button>
			<button type="button" class="button is-secondary" on:click={() => dispatch('cancel')}>
				Cancel
			</button>
		</div>
	</form>
</Card>
