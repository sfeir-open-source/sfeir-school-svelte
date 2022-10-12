<script>
	import logo from '../../images/Header.logo.svg';
</script>

<nav class="navbar is-dark is-fixed-top" aria-label="main navigation">
	<div class="container">
		<div class="navbar-brand">
			<a class="navbar-item" href="/#">
				<img src={logo} alt="sfeir logo" />
			</a>
		</div>

		{#if $$slots.menu}
			<div class="navbar-menu">
				<slot name="menu" />
			</div>
		{/if}
	</div>
</nav>

<style>
	img {
		width: 112px;
		height: 28px;
	}
</style>
