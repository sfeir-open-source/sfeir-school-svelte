<!-- .slide: class="with-code-bg-dark two-column" -->

<p>Un problème de communication</p>

```svelte
<script>
  import DisplayCount from "./DisplayCount.svelte";
	import Increment from './Increment.svelte';
	import Decrement from './Decrement.svelte';

	let count = 0;

	const onIncrement = () => (count = count + 1);
	const onDecrement = () => (count = count - 1);
</script>

<DisplayCount {count} />

<Increment on:increment={onIncrement} />
<Decrement on:decrement={onDecrement} />
```

##--##

<p>DisplayCount.svelte</p>

```svelte
<script>
	export let count = 0;
</script>

<p>{count}</p>
```

<p>Increment.svelte</p>

```svelte
<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch('increment')}> increment </button>
```

<p>Decrement.svelte</p>

```svelte
<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch('decrement')}> decrement </button>
```

