<!-- .slide: class="with-code-bg-dark" -->

# Un composant Svelte

### 3 parties distinctes : script, html, styles

```svelte [1-4|6-12|9-9|11-11|14-21]
<script>
	let city = 'Lille';
	let logoUrl = 'https://secure.meetupstatic.com/photos/event/b/5/5/a/600_488806426.jpeg';
</script>

<h1>Hello World!</h1>

<div>
	<p class="message">Welcome to Sfeir School @ {city}! 😀</p>

	<img src={logoUrl} width="200" alt="Logo Sfeir" />
</div>

<style>
	h1 {
		font-size: 3rem;
	}
	.message {
		color: red;
	}
</style>
```
