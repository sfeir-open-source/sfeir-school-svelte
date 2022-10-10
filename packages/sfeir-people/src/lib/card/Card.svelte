<script lang="ts">
  let className: string = "";
  export { className as class};
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
