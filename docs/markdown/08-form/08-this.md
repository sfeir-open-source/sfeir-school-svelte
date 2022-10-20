<!-- .slide: class="with-code-bg-dark two-column" -->

## Encore plus de binding

Élement DOM

```svelte
<script>
	let inputElement;

	const handleClick = () => {
		inputElement.focus();
	};
</script>

<button on:click={handleClick}> Focus </button>

<input type="text" placeholder="Recherche" bind:this={inputElement} />
```
