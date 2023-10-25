<script lang="ts">
	import PeopleCarousel from '$lib/people-carousel/PeopleCarousel.svelte';
	export let data;
</script>

<svelte:head>
  <title>SFEIR People - Carousel</title>
</svelte:head>

<div class="section">
  <div class="container is-max-desktop">
    <PeopleCarousel people={data.people} />
  </div>
</div>

