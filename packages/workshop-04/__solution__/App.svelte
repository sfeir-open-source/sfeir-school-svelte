<script lang="ts">
	import logo from '$common/images/Header.logo.svg';
	import PersonCard from '$common/components/person-card/PersonCard.svelte';
  import PeopleCarousel from '$common/components/people-carousel/PeopleCarousel.svelte';

	import data from './../../../data/people.json';

  const people = data?.people || [];

	let currentPage: 'LIST' | 'CAROUSEL' = 'LIST';

	const switchPage = () => {
		currentPage = currentPage === 'LIST' ? 'CAROUSEL' : 'LIST';
	};
</script>

<!-- Header -->
<nav class="navbar is-dark is-fixed-top" aria-label="main navigation">
	<div class="container">
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<img src={logo} alt="People logo" width="100px" />
			</a>
		</div>

		<div class="navbar-menu">
			<div class="navbar-end">
				<a
					href="/#"
					on:click|preventDefault={switchPage}
					class="navbar-item"
					class:is-active={currentPage === 'LIST'}
					aria-label="List"
				>
					<span class="icon">
						<i class="fa-solid fa-list" />
					</span>
				</a>

				<a
					href="/#"
					on:click|preventDefault={switchPage}
					class="navbar-item"
					class:is-active={currentPage === 'CAROUSEL'}
					aria-label="Carousel"
				>
					<span class="icon">
						<i class="fa-solid fa-layer-group" />
					</span>
				</a>
			</div>
		</div>
	</div>
</nav>

<!-- Main content -->
<div class="container pt-6">
	{#if currentPage === 'LIST'}
		<section class="section">
			<div class="columns is-multiline margin-medium">
				{#each people as person}
					<div class="column is-4">
						<PersonCard {person} />
					</div>
				{/each}
			</div>
		</section>
	{:else}
		<PeopleCarousel {people} />
	{/if}
</div>

