<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let person: Person;

	const dispatch = createEventDispatcher();

	export const onFormSubmit = () => {
		dispatch('formSubmit');
	};
</script>

<div class="person-card mdl-card mdl-shadow--2dp">
	<div class="card-content">
		<form>
			<div class="mdl-textfield mdl-js-textfield">
				<input
					class="mdl-textfield__input"
					type="text"
					id="sample1"
					bind:value={person.firstname}
				/>
				<label class="mdl-textfield__label" for="sample1">Firstname</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield">
				<input class="mdl-textfield__input" type="text" id="sample1" bind:value={person.lastname} />
				<label class="mdl-textfield__label" for="sample1">Lastname</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield">
				<input class="mdl-textfield__input" type="text" id="sample1" />
				<label class="mdl-textfield__label" for="sample1">Gender</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield">
				<input class="mdl-textfield__input" type="text" id="sample1" />
				<label class="mdl-textfield__label" for="sample1">Email</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield">
				<input class="mdl-textfield__input" type="text" id="sample1" />
				<label class="mdl-textfield__label" for="sample1">Phone</label>
			</div>
		</form>
	</div>
</div>
