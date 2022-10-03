<script lang="ts">
  // @ts-ignore
  import logo from '../../common/images/Header.logo.svg';
  export const MESSAGE = "Svelte @ Sfeir !";
</script>

<nav class="navbar is-dark" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="/#">
			<img src={logo} alt="sfeir logo" />
		</a>
	</div>
</nav>

<section class="section">
	<div class="container">
		<div class="card">
			<div class="card-content">
				<p class="title">
          {MESSAGE}
				</p>
			</div>
		</div>
	</div>
</section>
