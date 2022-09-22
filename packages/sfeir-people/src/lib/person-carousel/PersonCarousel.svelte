<script lang="ts">
	import PersonCard from '$lib/person-card/PersonCard.svelte';
	import { range } from '$lib/utils';

	export let people: Array<Person> = [];

	let index = 0;

	const { prev, next } = range(0, people.length - 1);

	$: triptych = [
		{ className: 'next', index: prev(index) },
		{ className: 'current', index },
		{ className: 'prev', index: next(index) }
	].map(({ className, index }) => ({ className, person: people[index] }));
</script>

<div class="carousel">
	<button
		class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
		on:click={() => (index = prev(index))}
	>
		<i class="material-icons">arrow_back</i>
	</button>

	{#each triptych as { person, className } (person.id)}
		<PersonCard {person} class={className} />
	{/each}

	<button
		class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
		on:click={() => (index = next(index))}
	>
		<i class="material-icons">arrow_forward</i>
	</button>
</div>

<style>
	.carousel {
		position: relative;
		flex-grow: 1;
		height: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.carousel > :global(.person-card) {
		position: absolute;
		margin: 0;
		display: none;
	}
	.carousel > :global(.person-card.current),
	.carousel > :global(.person-card.prev),
	.carousel > :global(.person-card.next) {
		display: initial;
		transition: transform 0.5s ease;
	}
	.carousel > :global(.person-card.prev) {
		transform: scale(0.6) translateY(150px);
		z-index: -1;
	}
	.carousel > :global(.person-card.next) {
		transform: scale(0.6) translateY(-150px);
		z-index: -1;
	}
</style>
