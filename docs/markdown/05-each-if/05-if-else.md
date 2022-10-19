<!-- .slide: class="with-code-bg-dark" -->

# Conditions

### Else

```svelte
<script>
  type Animal = {
    type: 'CAT' | 'DOG';
  };
	let animal: Animal = { type: 'cat' };
</script>

<div>
  {#if animal.type === 'cat'}
    <p>It's a cat! 🐱</p>
  {:else}
    <p>It's a dog! 🐶/<p>
  {/if}
</div>
```
