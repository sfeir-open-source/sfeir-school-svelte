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

<div class="carousel {$$props.class || ""}">
	<button
  class="button  is-link"
		on:click={() => (index = prev(index))}
	>
  <span class="icon">
    <i class="fa-solid fa-arrow-left fa-lg" />
  </span>
	</button>

	<div class="cards">
		{#each triptych as { person, className } (person.id)}
			<PersonCard {person} class={className} />
		{/each}
	</div>

	<button
  class="button  is-link"
		on:click={() => (index = next(index))}
	>
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

	.cards {
		position: relative;
		flex-grow: 1;
		display: flex;
		justify-content: center;
	}

	.cards > :global(.person-card) {
		margin: 0;
		display: none;
		top: 0;
		width: 30rem;
	}

	.cards > :global(.person-card.current),
	.cards > :global(.person-card.prev),
	.cards > :global(.person-card.next) {
		display: initial;
		transition: transform 0.5s ease;
	}
	.cards > :global(.person-card.prev) {
		transform: scale(0.6) translateY(150px);
		z-index: -1;
		position: absolute;
	}
	.cards > :global(.person-card.next) {
		transform: scale(0.6) translateY(-150px);
		z-index: -1;
		position: absolute;
	}
</style>
