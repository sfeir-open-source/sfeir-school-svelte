<script lang="ts">
	import PersonList from '$lib/person-list/PersonList.svelte';

	/** @type {import('./$types').PageData} */
  export let data;

  console.log($$props);

</script>

{#if data?.length > 0}
	<PersonList people={data} />
{:else}
	loading
{/if}
