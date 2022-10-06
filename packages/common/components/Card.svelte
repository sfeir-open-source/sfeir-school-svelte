<script>
  let className = "";

  export { className as class }
</script>

<div class="card {className}">
	<div class="card-content">
		<slot />
	</div>

  {#if $$slots.footer}
    <div class="card-footer">
      <slot name="footer" />
    </div>
  {/if}
</div>

<style>
	.card {
		max-width: 400px;
		margin: 0 auto;
	}
</style>
