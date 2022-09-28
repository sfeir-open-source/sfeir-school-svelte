<script lang="ts">
	export let options: RadioOption[] = [];
	export let value: string = '';
	export let id: string = '';
	export let label: string = '';
</script>

<div class="field">
	<label class="label" for={id}>{label}</label>
  <div class="control">
	{#each options as option}
		<label class="radio">
			<input
				type="radio"
				name={id}
				id="{id}-{option.value}"
				value={option.value}
				bind:group={value}
			/>
			{option.label}
		</label>
	{/each}
  </div>
</div>
