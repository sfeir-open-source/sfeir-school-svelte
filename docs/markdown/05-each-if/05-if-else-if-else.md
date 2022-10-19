<!-- .slide: class="with-code-bg-dark" -->

# Conditions

### Else-if

```svelte
<script>
  type Animal = {
    type: 'CAT' | 'DOG' | '???';
  };
	let animal: Animal = { type: 'cat' };
</script>

<div>
  {#if animal.type === 'cat'}
    <p>It's a cat! 🐱</p>
  {:else if animal.type === 'dog'}
    <p>It's a dog! 🐶</p>
  {:else}
    <p>Hum... it's probably a unicorn! 🦄</p>
  {/if}
</div>
```
