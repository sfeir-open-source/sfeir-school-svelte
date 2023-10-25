<!-- .slide: class="with-code-bg-dark" -->

# Boucles

### Index & Keyed

```svelte
<script>
	const beers = [
		{ id: 1, name: 'Punk IPA', brewer: 'Brewdog' },
		{ id: 2, name: 'Paix Dieux', brewer: 'Caulier' },
		{ id: 3, name: 'Cuvée des Trolls', brewer: 'Dubuisson' },
		{ id: 4, name: 'New Queen in Town', brewer: 'Brique House' },
		{ id: 5, name: '8.6 Original', brewer: 'Swinkels Family Brewers' }
	];
</script>

<ul>
	{#each beers as beer, index (beer.id)}
		<li>(index} - {beer.name} - {beer.brewer}</li>
	{/each}
</ul>
```

<br>

<p>
  Exemple du problème de mise à jour lié aux clés : 
  <a href="https://svelte.dev/examples/keyed-each-blocks" target="_blank">https://svelte.dev/examples/keyed-each-blocks</a>
</p>
