<!-- .slide: class="with-code-bg-dark two-column" -->

## Les events

### Les modifiers

```svelte
<form action="#" on:submit|preventDefault|once={handleSubmit}>
	<input type="text" name="firstname" />
	<button type="submit">Confirmer</button>
</form>
```

##--##

- `preventDefault`
- `stopPropagation`
- `passive`
- `nonpassive`
- `capture`
- `once`
- `self`
- `trusted`

<!-- .element style="margin-top: 120px;" -->

Notes:

Exemple avec le modifier "once" et "preventDefault" sur le livecoding précedent

- transformer le bouton en liens
- ajouter le "preventDefault"
- ajouter le "once"
- Possible d'avoir plusieurs listeners sur un même event (deux fois on:click)
