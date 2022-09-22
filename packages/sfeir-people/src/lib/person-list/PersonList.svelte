<script lang="ts">
  import TextField from '$lib/form/TextField.svelte';
	import PersonCard from '$lib/person-card/PersonCard.svelte';

	export let people: People = undefined;

	let query = '';

	const nameContains = (query: string) => {
		const re = new RegExp(query, 'i');
		return (p: Person): boolean => re.test(p.firstname) || re.test(p.lastname);
	};

	$: filteredPeople = people.filter(nameContains(query));
</script>

<main>
  <div class="mdl-grid">
    {#each filteredPeople as person}
      <div class="mdl-cell-4 mdl-cell-6-tablet mdl-cell-12-phone">
        <PersonCard {person} />
      </div>
    {/each}
  </div>
</main>

<footer>
    <TextField
      bind:value={query}
      label="Search by name"
    />
</footer>

<style>
	.mdl-grid {
		justify-content: center;
		gap: 30px;
	}

  footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: rgba(250, 250, 250, 0.9);
}
</style>
