<script lang="ts">
  import PersonCard from '$sfeirpeople/lib/person-card/PersonCard.svelte';

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

		<PersonCard person={people[0]} />

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
    gap: 1.6rem;
	}

  .carousel > :global(.person-card) {
    width: 100%;
    max-width: 28rem;
    min-height: 16rem;
  }
</style>
