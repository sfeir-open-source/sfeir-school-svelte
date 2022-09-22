<script>
import PersonCard from "$lib/person-card/PersonCard.svelte";

  let index = 0;

  let data: People;

</script>

<div class="carousel">
  <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
    <i class="material-icons">previous</i>
  </button>

  <PersonCard />

  <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
    <i class="material-icons">next</i>
  </button>
</div>



<style>
  .carousel {
  position: relative;
  flex-grow: 1;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  }

  .carousel > .person-card {
    position: absolute;
    margin: 0;
    display: none;
  }
  .carousel > .person-card.current,
  .carousel > .person-card.prev,
  .carousel > .person-card.next {
    display: initial;
    transition: transform 0.5s ease;
  }
  .carousel > .person-card.prev {
    transform: scale(0.6) translateY(150px);
      z-index: -1;
  }
  .carousel > .person-card.next {
    transform: scale(0.6) translateY(-150px);
      z-index: -1;
  }
</style>
