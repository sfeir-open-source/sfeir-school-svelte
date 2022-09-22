<script lang="ts">
	import PersonCard from '$lib/person-card/PersonCard.svelte';

	export let data: Person;
</script>

<div class="mdl-grid">
	<PersonCard person={data} isEditable={true} />
</div>

<style>
  .mdl-grid {
    justify-content: center;
  }
</style>
