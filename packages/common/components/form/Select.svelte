<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

	export let value: string = '';
	export let options: string[] = [];
	export let label: string = '';
	export let id: string = label;
</script>

<div class="field">
	{#if label}
		<label class="label" for={id}>{label}</label>
	{/if}
	<div class="select">
		<select {id} bind:value on:change={() => dispatch('change', value)}>
			<option value="" disabled selected>{label}</option>
			{#each options as option}
				<option value={option}>{option}</option>
			{/each}
		</select>
	</div>
</div>
