<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let value: string = '';
	export let label: string = '';
	export let id: string = label;

	export let iconLeft: string = '';
	export let iconRight: string = '';
</script>

<div class="field">
	{#if label}
		<label class="label" for={id}>{label}</label>
	{/if}
	<div class="control" class:has-icons-right={!!iconRight} class:has-icons-left={!!iconLeft}>
		<input
			class="input"
			bind:value
			{id}
			{...$$restProps}
			on:input={() => dispatch('change', value)}
		/>
		{#if iconLeft}
			<span class="icon is-medium is-left">
				<i class="fas fa-{iconLeft}" />
			</span>
		{/if}
		{#if iconRight}
			<span class="icon is-medium is-right">
				<i class="fas fa-{iconRight}" />
			</span>
		{/if}
	</div>
</div>
