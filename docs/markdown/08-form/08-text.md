<!-- .slide: class="with-code-bg-dark two-column" -->

Champs texte

```svelte
<script>
	let value = '';
</script>

<input type="text" {value} on:input={(e) => (value = e.target.value)} />
```

##--##

```svelte
<script>
	let value = '';
</script>

<input type="text" bind:value />
```

<!-- .element class="fragment" data-fragment-index="1" style="margin-top: 92px;" -->
