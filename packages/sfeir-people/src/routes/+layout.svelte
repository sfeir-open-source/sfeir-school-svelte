<script>
	import logo from '../../../common/images/Header.logo.svg';
	import { page } from '$app/stores';
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
  <script src="https://kit.fontawesome.com/ea210a45ce.js" crossorigin="anonymous"></script>
</svelte:head>

<nav class="navbar is-dark is-fixed-top" aria-label="main navigation">
  <div class="container">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
    	<img src={logo} alt="People logo" width="100px"/>
    </a>
  </div>

  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a href="/list" class="button is-link">
            <span class="icon">
              <i class="fa-solid fa-list"></i>
            </span>
          </a>
          <a href="/carousel" class="button is-link">
            <span class="icon">
              <i class="fa-solid fa-layer-group"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</nav>

<div class="container">
  <slot/>
</div>

