<!-- .slide: class="with-code-bg-dark" -->

# beforeUpdate, afterUpdate

```svelte
<script>
	import { beforeUpdate, afterUpdate } from 'svelte';

	beforeUpdate(() => {
		console.log('Le DOM va changer');
	});

	afterUpdate(() => {
		console.log('Le DOM vient de changer');
	});
</script>
```

Notes:

Repl : https://svelte.dev/repl/0db658fcd5ff418fa2954d80b173b6c4?version=3.52.0
