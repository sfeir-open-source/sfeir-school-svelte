<script lang="ts">
	export let value: string = '';
	export let label: string = '';
	export let id: string = '';

	export let iconLeft: string = '';
	export let iconRight: string = '';
</script>

<div class="field">
	{#if label}
		<label class="label" for={id}>{label}</label>
	{/if}
	<div class="control" class:has-icons-right={!!iconRight} class:has-icons-left={!!iconLeft}>
		<input class="input" bind:value {id} {...$$restProps} />
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
