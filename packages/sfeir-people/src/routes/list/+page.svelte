<script>
	import PersonList from 'src/lib/person-list/PersonList.svelte';
import { onMount } from 'svelte';

	let people = [];

	onMount(() => {
		fetch('http://localhost:4000/people')
			.then((res) => res.json())
			.then((data) => {
				people = data;
			});
	});
</script>

<div class="mdl-grid">
	<PersonList people={people} />
</div>
