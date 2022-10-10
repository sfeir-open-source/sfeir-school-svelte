<script lang="ts">
	import logo from '../../../../common/images/Header.logo.svg';
</script>

<nav class="navbar is-dark is-fixed-top" aria-label="main navigation">

	<div class="container">
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<img src={logo} alt="People logo" width="100px" />
			</a>
		</div>

    <slot name="menu" />

	</div>
</nav>
