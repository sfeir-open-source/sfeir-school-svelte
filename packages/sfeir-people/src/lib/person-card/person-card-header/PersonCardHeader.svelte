<script>
  export let photo = "";
  export let name = ""
</script>

<div class="media">
  <div class="media-left">
    <figure class="image is-64x64">
      <img src={photo} alt="Face of {name}">
    </figure>
  </div>
  <div class="media-content">
    <p class="title is-4"><slot name="title"/></p>
    <p class="subtitle is-6"><slot name="subtitle"/></p>
  </div>
</div>
