<script lang="ts">
	import PersonCarousel from '$lib/person-carousel/PersonCarousel.svelte';
	export let data;
</script>

<PersonCarousel people={data.people} />
