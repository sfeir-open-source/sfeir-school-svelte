<!-- .slide: class="with-code-bg-dark" -->

# Boucles

### Each

```svelte
<script>
  const beers = [
    {id: 1, name: 'Punk IPA', brewer: 'Brewdog' },
    {id: 2, name: 'Paix Dieux', brewer: 'Caulier' },
    {id: 3, name: 'Cuvée des Trolls', brewer: 'Dubuisson' },
    {id: 4, name: 'New Queen in Town', brewer: 'Brique House' }
  ];
</script>

<ul>
	{#each beers as beer}
		<li>{beer.name} - {beer.brewer}</li>
	{/each}
</ul>
```
