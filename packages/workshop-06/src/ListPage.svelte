<script lang="ts">
  import PersonCard from "$common/components/person-card/PersonCard.svelte";

  const people = [];
</script>

<section class="section">
  <div class="columns is-multiline margin-medium">
    {#each people as person}
      <div class="column is-4">
        <PersonCard {person} />
      </div>
    {/each}
  </div>
</section>
