<!-- .slide: class="with-code-bg-dark" -->

## Les events

### Les events de composant

```svelte
<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>
```

Notes:

Livecoding

- Transformer le bouton en un composant
- montrer le forward d'event DOM (on:click)
- transformer en un CustomEvent : Dispatch un event "clickButton"
- adapter le parent
