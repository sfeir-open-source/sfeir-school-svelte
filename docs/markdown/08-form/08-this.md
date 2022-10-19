<!-- .slide: class="with-code-bg-dark two-column" -->

## Encore plus de binding

Élement DOM

```svelte
<script>
	let canvasElement;

	const drawCircle = () => {
		const ctx = canvasElement.getContext('2d');
		ctx.beginPath();
		ctx.arc(100, 75, 50, 0, 2 * Math.PI);
		ctx.stroke();
	};
</script>

<canvas bind:this={canvasElement} on:click={drawCircle} />
```
