<script lang="ts">
  import PeopleCarousel from "$common/components/people-carousel/PeopleCarousel.svelte";
  import { people } from "./people.store";
</script>

<PeopleCarousel people={$people} />
