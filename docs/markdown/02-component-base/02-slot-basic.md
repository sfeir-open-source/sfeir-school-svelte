<!-- .slide: class="with-code-bg-dark two-column" -->

<p>Composition avec l'élément "slot"</p>

```svelte
<script>
	import WelcomeMessage from './WelcomeMessage.svelte';

	const city = 'Lille';
	const logoUrl = 'https://secure.meet..../photo.jpeg';
</script>

<h1>Hello World!</h1>

<WelcomeMessage {city}>
	<img src={logoUrl} width="200" alt="Logo Sfeir" />
</WelcomeMessage>

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
  export let city = 'Amsterdam';
</script>

<div>
	<p class="message">Welcome to Sfeir School @ {city}! 😀</p>

  </slot />
</div>

<style>
	.message {
		color: red;
	}
</style>
```
