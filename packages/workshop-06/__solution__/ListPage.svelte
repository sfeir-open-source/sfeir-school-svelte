<script lang="ts">
	import PersonCard from '$common/components/person-card/PersonCard.svelte';
	import { people } from './people.store';
</script>

<div class="columns is-multiline margin-medium">
	{#each $people as person}
		<div class="column is-4">
			<PersonCard {person} />
		</div>
	{/each}
</div>
