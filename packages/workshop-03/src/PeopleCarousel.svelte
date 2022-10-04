<script lang="ts">
	import PersonCard from './../../common/components/person-card/PersonCard.svelte';

	export let people = [];

	// cycle through the people array when clicking the previous
	// and the next buttons. Look in ../../commons/utils.js for some utility
	// functions you may need.
</script>

<div class="carousel">
	<button class="button is-link">
		<span class="icon">
			<i class="fa-solid fa-arrow-left fa-lg" />
		</span>
	</button>

	<div class="slides">
		<div class="slide prev">
			<PersonCard person={people[0]} />
		</div>
		<div class="slide current">
			<PersonCard person={people[1]} />
		</div>
		<div class="slide next">
			<PersonCard person={people[2]} />
		</div>
	</div>

	<button class="button is-link">
		<span class="icon">
			<i class="fa-solid fa-arrow-right fa-lg" />
		</span>
	</button>
</div>

<style>
	.carousel {
		display: flex;
		align-items: center;
		padding: 3rem 0;
		min-height: 320px;
	}

	.slides {
		position: relative;
		z-index: 0;
		flex-grow: 1;
		display: flex;
		justify-content: center;
	}

	.slide {
		margin: 0;
		display: none;
		top: 0;
		width: 30rem;
		min-height: 16rem;
	}

	.slide.current,
	.slide.prev,
	.slide.next {
		display: initial;
		transition: transform 0.5s ease;
	}
	.slide.prev {
		transform: scale(0.6) translateY(150px);
		z-index: -1;
		position: absolute;
	}
	.slide.next {
		transform: scale(0.6) translateY(-150px);
		z-index: -1;
		position: absolute;
	}
</style>
