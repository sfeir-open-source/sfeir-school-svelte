<script>
  import logo from '../../../common/images/Header.logo.svg';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
	<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
</svelte:head>

<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">

      <img src={logo} alt="People logo" />

      <div class="mdl-layout-spacer"></div>

      <div>
        <button class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">view_module</i>
        </button>
        <button class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">view_carousel</i>
        </button>
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
</style>
