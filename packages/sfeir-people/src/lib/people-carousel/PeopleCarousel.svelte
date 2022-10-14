<script lang="ts">
	import PersonCard from '$lib/person-card/PersonCard.svelte';
	import { range } from '$lib/utils';

	export let people = [];

	let currIndex = 0;

	$: prevIndex = range(0, people.length - 1).prev(currIndex);
	$: nextIndex = range(0, people.length - 1).next(currIndex);

  $: slides = [
		[people[prevIndex], 'prev'],
		[people[currIndex], 'current'],
		[people[nextIndex], 'next']
	];

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
		{#each slides as [person, className] (person.id)}
	    <PersonCard person={person} class={className} />
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
