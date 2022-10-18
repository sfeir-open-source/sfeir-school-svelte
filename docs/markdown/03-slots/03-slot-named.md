<!-- .slide: class="with-code-bg-dark two-column" -->

<p>Plusieurs "slots"</p>

```svelte
<script>
	import WelcomeMessage from './WelcomeMessage.svelte';

	const city = 'Lille';
	const logoUrl = 'https://secure.meet..../photo.jpeg';
</script>

<h1>Hello World!</h1>

<WelcomeMessage>
	<p slot="message">Welcome to Sfeir School @ {city}! 😀</p>
	<img slot="image" src={logoUrl} width="200" alt="Logo Sfeir" />
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
<div class="box">
	<slot name="message" />
	<slot name="image" />
</div>

<style>
	.box {
		background-color: grey;
		padding: 2rem;
	}
</style>
```
