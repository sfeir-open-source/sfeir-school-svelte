<script>
  export let photo = "";
  export let name = ""
</script>

<div class="media">
  <div class="media-left">
    <figure class="image is-96x96">
      <img src={photo} alt="Face of {name}">
    </figure>
  </div>
  <div class="media-content">
    <p class="title is-4"><slot name="title"/></p>
    <p class="subtitle is-6"><slot name="subtitle"/></p>
  </div>
</div>

<style>
  img {
    border-radius: 50%;
  }
</style>
