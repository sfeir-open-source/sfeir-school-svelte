<script lang="ts">
	export let options: RadioOption[] = [];
	export let value: string = '';
	export let id: string = '';
	export let label: string = '';
</script>

<div>
	<label class="mdl-checkbox__label" for={id}>{label}</label>
	{#each options as option}
  <div>
  <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="{id}-{option.value}">
    <input type="radio" id="{id}-{option.value}" class="mdl-radio__button" name={id} value={option.value} bind:group={value}>
    <span class="mdl-radio__label">{option.label}</span>
  </label>
</div>
  {/each}
</div>
