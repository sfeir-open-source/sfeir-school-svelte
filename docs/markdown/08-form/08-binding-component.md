<!-- .slide: class="with-code-bg-dark two-column" -->

Props

```svelte
<script>
	let pizzaSize = '';
	let pizzaSupplements = [];
</script>

<PizzaSizeSelector bind:selectedSize={pizzaSize} />
<PizzaSupplementSelector bind:selectedSupplements={pizzaSupplements} />
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

{#if selectedSize}
	<p>Vous avez choisi une {selectedSize} pizza</p>
{:else}
	<p>Veuillez sélectionner une taille de pizza</p>
{/if}
```
