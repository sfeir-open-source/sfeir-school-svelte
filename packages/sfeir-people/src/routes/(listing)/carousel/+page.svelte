<script lang="ts">
	import PersonCarousel from '$lib/person-carousel/PersonCarousel.svelte';
	export let data;

  $: console.log($$props)
</script>

<div class="container is-max-desktop">
  <PersonCarousel people={data.people} class="mt-4" />
</div>

