<!-- .slide: class="with-code-bg-dark two-column" -->

Binder une propriété de composant

```svelte
<script>
	let pizzaSize = '';
	let pizzaSupplements = [];
</script>

<PizzaSizeSelector bind:value={pizzaSize} />
<PizzaSupplementSelector bind:value={pizzaSupplements} />
```

##--##

PizzaSizeSelector.svelte

```svelte
<script>
	const sizes = ['petite', 'moyenne', 'grande'];
	export let selectedSize;
</script>

{#each sizes as size}
	<label>
		<input type="radio" name="size" value={size} bind:group={selectedSize} />
		{size}
	</label>
{/each}

{#if size}
	<p>Vous avez choisi une {selectedSize} pizza</p>
{:else}
	<p>Veuillez sélectionner une taille de pizza</p>
{/if}
```
