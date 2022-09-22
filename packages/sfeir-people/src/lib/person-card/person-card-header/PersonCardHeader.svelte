<header>
  <h1 class="mdl-typography--title">
    <slot name="title" />
  </h1>
  <h2 class="mdl-typography--subhead"><slot name="subtitle" /></h2>
</header>

<style>
  header {
    padding: 16px 0;
    width: 380px;
  }
  header > h1 {
    margin: 0;
  }
  header > h2 {
    margin: 0;
  }
</style>
