<script lang="ts">
	import PersonCard from './../../common/components/person-card/PersonCard.svelte';
	import { range } from './utils';

	export let people = [];

  // todo : cycle through the people array when clicking the previous
	// and the next buttons. Look in ./utils.js for some utility
	// functions you may need.
</script>

<div class="carousel">
	<button class="button is-link">
		<span class="icon">
			<i class="fa-solid fa-arrow-left fa-lg" />
		</span>
	</button>

	<div class="slides">
    <PersonCard person={people[0]} class="prev"/>
    <PersonCard person={people[1]} class="current"/>
    <PersonCard person={people[2]} class="next"/>
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
    justify-content: center;
    gap: 2rem;
		padding: 3rem 0;
		min-height: 320px;
	}

	.slides {
		position: relative;
		z-index: 0;
		display: flex;
		justify-content: center;
	}

	.slides > :global(.card) {
		margin: 0;
		display: none;
		top: 0;
		width: 30rem;
		min-height: 16rem;
	}

	.slides > :global(.card.current),
	.slides > :global(.card.prev),
	.slides > :global(.card.next) {
		display: initial;
		transition: transform 0.5s ease;
	}
	.slides > :global(.card.prev) {
		transform: scale(0.6) translateY(150px);
		z-index: -1;
		position: absolute;
	}
	.slides > :global(.card.next) {
		transform: scale(0.6) translateY(-150px);
		z-index: -1;
		position: absolute;
	}
</style>
