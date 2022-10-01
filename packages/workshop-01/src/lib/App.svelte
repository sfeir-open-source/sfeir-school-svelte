<script>
	import logo from '../../../common/images/Header.logo.svg';
</script>

<script lang="ts">
  export const MESSAGE = "Svelte @ Sfeir !";
</script>

<nav class="navbar is-dark" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="/#">
			<img src={logo} width="112" height="28" alt="sfeir logo" />
		</a>
	</div>
</nav>

<section class="section">
	<div class="container">
		<div class="card">
			<div class="card-content">
				<p class="title">
					{message}
				</p>
			</div>
		</div>
	</div>
</section>
