<script lang="ts">
	import PersonList from '$lib/person-list/PersonList.svelte';

	let data;

  $: console.log(data);
</script>

{#if data?.length > 0}
  {data}
	<!-- <PersonList people={data} /> -->
{:else}
	loading
{/if}
