<script lang="ts">
	import PersonCard from '$lib/person-card/PersonCard.svelte';

	export let data: Person;
</script>

	<PersonCard person={data} isEditable={true} class="mt-5"/>
