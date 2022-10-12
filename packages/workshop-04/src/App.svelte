<script lang="ts">
	import logo from '$common/images/Header.logo.svg';
	import PersonCard from '$common/components/person-card/PersonCard.svelte';
	import PeopleCarousel from '$common/components/people-carousel/PeopleCarousel.svelte';

	import data from './../../../data/people.json';

	// Use this to display the list of person
	const people: People = data?.people || [];
</script>

<!-- Header -->
<!-- Bonus: create a component Header & HeaderMenu to encapsulate following markup -->
<nav class="navbar is-dark is-fixed-top" aria-label="main navigation">
	<div class="container">
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<img src={logo} alt="People logo" width="100px" />
			</a>
		</div>

		<div class="navbar-menu">
			<div class="navbar-end">
				<a href="/#" class="navbar-item is-active" aria-label="List">
					<span class="icon">
						<i class="fa-solid fa-list" />
					</span>
				</a>

				<a href="/#" class="navbar-item" aria-label="Carousel">
					<span class="icon">
						<i class="fa-solid fa-layer-group" />
					</span>
				</a>
			</div>
		</div>
	</div>
</nav>

<div class="container pt-6">
  <br >
  <br >
	<p class="has-text-centered">Switch between a list of person card and the carousel (components already imported)</p>
	<br />
	<p class="has-text-centered">Hint: use a component state to know which page to display, and link in header to toggle pages</p>
</div>
