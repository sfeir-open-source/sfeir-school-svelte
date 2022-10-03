<script lang="ts">
  import PersonCard from '$sfeirpeople/lib/person-card/PersonCard.svelte';
  import { range } from './../../common/utils';

  export let people = [];

  let index = 0;

  const handleNext = () => {
    index = range(0, people.length - 1).next(index);
  }

  const handlePrev = () => {
    index = range(0, people.length - 1).prev(index);
  }
</script>

	<div class="carousel">
		<button class="button is-link" on:click={handlePrev}>
			<span class="icon">
				<i class="fa-solid fa-arrow-left fa-lg" />
			</span>
		</button>

		<PersonCard person={people[index]} />

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
    gap: 1.6rem;
	}

  .carousel > :global(.person-card) {
    width: 100%;
    max-width: 28rem;
    min-height: 16rem;
  }
</style>
