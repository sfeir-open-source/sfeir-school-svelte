<!-- .slide: class="with-code-bg-dark two-column" -->

## Encore plus de binding

Instance de composant

```svelte
<script>
	import CanvasComponent from './CanvasComponent.svelte';
	let canvas;
</script>

<CanvasComponent bind:this={canvas} />
<div><button on:click={canvas.drawCircle}>Dessiner un cercle</button></div>
```

##--##

CanvasComponent.svelte

<!-- .element style="margin-top: 200px;" -->

```svelte [4]
<script>
	let canvasElement;

	export const drawCircle = () => {
		const ctx = canvasElement.getContext('2d');
		ctx.beginPath();
		ctx.arc(100, 75, 50, 0, 2 * Math.PI);
		ctx.stroke();
	};
</script>

<canvas bind:this={canvasElement} />
```
