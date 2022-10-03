<script lang="ts">
	export let currentPage: string = '';
</script>

<div class="navbar-menu">
	<div class="navbar-end">
		<a
			href="/list"
			class="navbar-item"
			class:is-active={currentPage.startsWith('/list')}
			aria-label="List"
		>
			<span class="icon">
				<i class="fa-solid fa-list" />
			</span>
		</a>

		<a
			href="/carousel"
			class="navbar-item"
			class:is-active={currentPage.startsWith('/carousel')}
			aria-label="Carousel"
		>
			<span class="icon">
				<i class="fa-solid fa-layer-group" />
			</span>
		</a>
	</div>
</div>
