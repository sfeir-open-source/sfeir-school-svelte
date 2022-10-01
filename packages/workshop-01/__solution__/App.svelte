<script lang="ts">
  import Card from './Card.svelte';
  import Header from './Header.svelte';

  const MESSAGE = "Svelte @ Sfeir !";
</script>

<Header />

<section class="section">
	<div class="container">
    <Card message={MESSAGE} />
	</div>
</section>
