<script lang="ts">
	import Header from '$sfeirpeople/lib/header/Header.svelte';
  import Carousel from './Carousel.svelte';

	import data from './../../data/people.json';
</script>

<Header />

<section class="section">
  <Carousel people={data.people} />
</section>
