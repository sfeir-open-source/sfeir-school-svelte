<script>
	import logo from '../../../common/images/Header.logo.svg';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-blue.min.css" />
</svelte:head>

<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
	<header class="mdl-layout__header">
		<div class="mdl-layout__header-row">
			<img src={logo} alt="People logo" />

			<div class="mdl-layout-spacer" />

			<div>
				<a
					href="/list"
					class="mdl-button mdl-js-button mdl-button--icon"
					class:mdl-button--raised={$page.url.pathname === '/list'}
				>
					<i class="material-icons">view_module</i>
				</a>
				<a
					href="/carousel"
					class="mdl-button mdl-js-button mdl-button--icon"
					class:mdl-button--raised={$page.url.pathname === '/carousel'}
				>
					<i class="material-icons">view_carousel</i>
				</a>
			</div>
		</div>
	</header>

	<main class="mdl-layout__content">
		<div class="page-content">
			<slot />
		</div>
	</main>
</div>

<style>
	@import '../../../common/styles.css';

	main {
		margin-top: 20px;
	}
</style>
