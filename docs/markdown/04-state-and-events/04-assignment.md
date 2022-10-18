<!-- .slide: class="with-code-bg-dark" -->

## L'affectation

### Synchronisation variable / DOM

```svelte [1-11|5,11]
<script>
	let count = 0;

	function increment() {
		count = count + 1;
	}
</script>

<button on:click={increment}>Increment</button>

<div>Count : {count}</div>
```

[Les opérateurs d'affectation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#op%C3%A9rateurs_daffectation)
