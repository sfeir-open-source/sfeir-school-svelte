<!-- .slide: class="with-code-bg-dark two-column" -->

# onDestroy

```svelte
<script>
	import { onDestroy } from 'svelte';

	onDestroy(() => {
		console.log('Le composant est détruit');
	});
</script>
```
