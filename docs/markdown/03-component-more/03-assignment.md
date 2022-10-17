<!-- .slide: class="with-code-bg-dark" -->

## L'affectation (=)

Svelte utilise l'affectation pour synchroniser l'état du composant avec le DOM :

```svelte
<script>
	let count = 0;

	function increment() {
		count = count + 1;
	}
</script>

<button on:click={increment}>Increment</button>

<div>Count : {count}</div>
```

[Tous les opérateurs d'affectation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#op%C3%A9rateurs_daffectation)
