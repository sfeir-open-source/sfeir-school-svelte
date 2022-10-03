<script lang="ts">
  export let message: string;
</script>

<div class="card">
  <div class="card-content">
    <p class="title">
      {message}
    </p>
  </div>
</div>

<style>
  .card {
    max-width: 400px;
    margin: 0 auto;
  }

  .title {
    font-size: 2rem;
    text-align: center;
  }
</style>
