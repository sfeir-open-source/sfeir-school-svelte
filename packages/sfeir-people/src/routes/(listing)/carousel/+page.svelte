<script lang="ts">
	import PersonCarousel from '$lib/person-carousel/PersonCarousel.svelte';
	export let data;

  $: console.log($$props)
</script>

<PersonCarousel people={data.people} class="mt-4" />
