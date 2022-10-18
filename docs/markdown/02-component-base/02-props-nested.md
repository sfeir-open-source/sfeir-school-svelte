<!-- .slide: class="with-code-bg-dark two-column" -->

<p>Composants imbriqués et propriétés</p>

<p>App.svelte</p>

```svelte
<script>
  import WelcomeMessage from './WelcomeMessage.svelte';

	const logoUrl = 'https://secure.meet..../photo.jpeg';
</script>

<h1>Hello World!</h1>

<WelcomeMessage city="Lille" {logoUrl} />

<style>
	h1 {
		font-size: 3rem;
	}
</style>
```

##--##

<p>WelcomeMessage.svelte</p>

```svelte
<script>
	// Required property
	export let logoUrl;
	// Property with a default value
	export let city = 'Amsterdam';
</script>

<div>
	<p class="message">Welcome to Sfeir School @ {city}! 😀</p>

	<img src={logoUrl} width="200" alt="Logo Sfeir" />
</div>

<style>
	.message {
		color: red;
	}
</style>
```
