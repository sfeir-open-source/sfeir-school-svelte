<script lang="ts">
	import PeopleCarousel from '$lib/people-carousel/PeopleCarousel.svelte';
	export let data;
</script>

<div class="section">
  <div class="container is-max-desktop">
    <PeopleCarousel people={data.people} />
  </div>
</div>

