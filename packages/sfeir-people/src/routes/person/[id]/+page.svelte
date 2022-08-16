<script lang="ts">
	import PersonCard from '$lib/person-card/PersonCard.svelte';
	export let data: Person;
</script>

<div class="mdl-grid">
	<PersonCard person={data} />
</div>
