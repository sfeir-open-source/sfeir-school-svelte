<!-- .slide: class="with-code-bg-dark two-column" -->

## Les events

### Les modifiers

```svelte
<script>
	let hasSubmitted = false;

	const handleSubmit = (event) => {
		event.preventDefault();
		if (hasSubmitted) return;
		console.log('Le formulaire a été envoyé !');
		hasSubmitted = true;
	};
</script>

<form action="#" on:submit={handleSubmit}>
	<input type="text" name="firstname" />
	<button type="submit">Confirmer</button>
</form>
```

##--##

```svelte
<script>
	const handleSubmit = () => {
		console.log('Le formulaire a été envoyé !');
	};
</script>

<form action="#" on:submit|preventDefault|once={handleSubmit}>
	<input type="text" name="firstname" />
	<button type="submit">Confirmer</button>
</form>
```

- `preventDefault`
- `stopPropagation`
- `passive`
- `nonpassive`
- `capture`
- `once`
- `self`
- `trusted`

<!-- .element style="margin-top: 40px;" -->

Notes:

Exemple avec le modifier "once" et "preventDefault" sur le livecoding précedent

- transformer le bouton en liens
- ajouter le "preventDefault"
- ajouter le "once"
- Possible d'avoir plusieurs listeners sur un même event (deux fois on:click)
