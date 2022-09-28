<div class="card {$$props.class || ''}">
	<div class="card-content">
		<slot />
	</div>
	{#if $$slots.footer}
		<div class="card-footer">
			<slot name="footer" />
		</div>
	{/if}
</div>
