<script lang="ts">
	import PersonList from '$lib/person-list/PersonList.svelte';

	/** @type {import('./$types').PageData} */
  export let data;
</script>

{#if data?.people?.length > 0}
	<PersonList people={data.people} />
{:else}
	loading
{/if}
