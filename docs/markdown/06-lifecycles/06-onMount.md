<!-- .slide: class="with-code-bg-dark two-column" -->

# onMount

```svelte
<script>
	import { onMount } from 'svelte';

	onMount(() => {
		console.log("Le composant vient d'être monté");
	});
</script>
```

##--##

callback

<!-- .element: class="fragment" data-fragment-index="1" style="margin-top: 135px;" -->

```svelte
<script>
	import { onMount } from 'svelte';

	let seconds = 0;

	onMount(() => {
		const timer = setInterval(() => {
			seconds += 1;
		}, 1000);
		return () => clearInterval(timer);
	});
</script>

<span>Secondes écoulées : {seconds}</span>
```

<!-- .element: class="fragment" data-fragment-index="1" -->
