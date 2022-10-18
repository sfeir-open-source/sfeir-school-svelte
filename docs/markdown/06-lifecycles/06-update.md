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

[Cas d'exemple sur ce REPL]()
