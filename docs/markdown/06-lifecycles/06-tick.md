<!-- .slide: class="with-code-bg-dark" -->

# tick

```svelte
<script>
	import { tick } from 'svelte';

	let count = 0;

	const increment = async () => {
		count += 1;
		await tick();
		console.log('Le DOM vient de changer !');
	};
</script>

<span>Compteur : {count}</span>
```
