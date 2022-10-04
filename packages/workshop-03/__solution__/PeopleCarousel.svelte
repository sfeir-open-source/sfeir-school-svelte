<script lang="ts">
	import PersonCard from './../../common/components/person-card/PersonCard.svelte';
	import { range } from '../../common/utils';

	export let people = [];

	let currIndex = 0;

	$: prevIndex = range(0, people.length - 1).prev(currIndex);
	$: nextIndex = range(0, people.length - 1).next(currIndex);

	const handleNext = () => {
		currIndex = range(0, people.length - 1).next(currIndex);
	};

	const handlePrev = () => {
		currIndex = range(0, people.length - 1).prev(currIndex);
	};
</script>

<div class="carousel">
	<button class="button is-link" on:click={handlePrev}>
		<span class="icon">
			<i class="fa-solid fa-arrow-left fa-lg" />
		</span>
	</button>

	<div class="slides">
		{#each people as person, index}
			<div
				class="slide"
				class:prev={index === prevIndex}
				class:current={index === currIndex}
				class:next={index === nextIndex}
			>
				<PersonCard {person} />
			</div>
		{/each}
	</div>

	<button class="button is-link" on:click={handleNext}>
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
