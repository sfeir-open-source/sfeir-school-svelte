<script lang="ts">
import PersonCard from "../person-card/PersonCard.svelte";

  export let people: People = undefined;
</script>

<div>
  {#each people as person}
    <PersonCard person={person} />
  {/each}
</div>
