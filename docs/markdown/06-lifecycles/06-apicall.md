<!-- .slide: class="with-code-bg-dark" -->

# onMount

### Cas d'usage : Appel AJAX

```svelte
<script>
	import { onMount } from 'svelte';

	let people = [];

	onMount(async () => {
		const res = await fetch(`/people`);
		people = await res.json();
	});
</script>
```
