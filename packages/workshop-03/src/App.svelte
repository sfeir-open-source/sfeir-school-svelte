<script lang="ts">
	import Header from '../../common/components/header/Header.svelte';
  import PeopleCarousel from './PeopleCarousel.svelte';

	import data from './../../../data/people.json';
</script>

<Header />

<section class="section">
  <PeopleCarousel people={data.people} />
</section>
