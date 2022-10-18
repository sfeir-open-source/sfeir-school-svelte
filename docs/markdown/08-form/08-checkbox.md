<!-- .slide: class="with-code-bg-dark" -->

Checkbox

```svelte
<script>
	let isChecked = false;
</script>

<label>
	<input type="checkbox" bind:checked={isChecked} />
	Une belle checkbox
</label>
```
