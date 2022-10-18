<!-- .slide: class="with-code-bg-dark two-columns" -->

Select

```svelte
<script>
	const options = [
		{ value: 'pain-choco', label: 'Pain au chocolat' },
		{ value: 'chocolatine', label: 'Chocolatine' },
		{ value: 'petit-pain', label: 'Petit pain' },
		{ value: 'croissant-choco', label: 'Croissant au chocolat' }
	];

	let selectedOption = options[1];
</script>

<select bind:value={selectedOption}>
	{#each options as option}
		<option value={option}>{option.label}</option>
	{/each}
</select>

<p>On dit "{selectedOption.label}"</p>
```
