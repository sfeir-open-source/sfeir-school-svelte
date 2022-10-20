<!-- .slide: class="with-code-bg-dark two-column" -->

## Encore plus de binding

Instance de composant

```svelte
<script>
	import TextField from './TextField.svelte';

	let field;
</script>

<TextField bind:this={field} />

<button on:click={field.validate}> Valider </button>
```

##--##

TextField.svelte

<!-- .element style="margin-top: 200px;" -->

```svelte [1-17|5]
<script>
	let value = '';
	let error = '';

	export const validate = () => {
		if (!value) error = 'Ce champs est requis';
		else if (value.length < 5) '5 Caractères minimum';
		else error = '';
	};
</script>

<div>
	<input type="text" placeholder="Prénom" bind:value />
	{#if error}
		<p>{error}</p>
	{/if}
</div>
```
