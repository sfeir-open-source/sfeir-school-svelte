<!-- .slide: class="with-code-bg-dark" -->

## Les events

### Events DOM

```svelte
<script>
	let count = 0;

	function increment() {
		count = count + 1;
	}
</script>

<button on:click={increment}>Clique !</button>
<button on:mouseover={increment}>Survole !</button>
<button on:focus={increment}>Focus !</button>

<div>Count : {count}</div>
```
