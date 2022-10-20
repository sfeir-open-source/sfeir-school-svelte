<!-- .slide: class="with-code-bg-dark" -->

# Les éléments spéciaux

Exemples : <a href="https://svelte.dev/examples/svelte-self" target="_blank">REPL<a/>

```svelte
<svelte:self name="Michel" />

<svelte:component this={anyComponent} />
<svelte:element this="h1" />

<svelte:window on:keydown={handleKeydown} />
<svelte:window bind:scrollY={y} />
<svelte:body on:mouseenter={handleMouseenter} />

<svelte:head>
	<link rel="stylesheet" href="/tutorial/dark-theme.css">
</svelte:head>
```
