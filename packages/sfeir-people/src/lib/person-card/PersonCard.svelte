<script lang="ts">
  export let person: Person;
</script>

<div class="person-card mdl-card mdl-shadow--2dp">
  <div class="mdl-card__title">
    <img src={person.photo} border="0" alt="" style="padding:20px;">
    <h2 class="mdl-card__title-text">{person.firstname} {person.lastname}</h2>
  </div>
  <div class="mdl-card__supporting-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenan convallis.
  </div>
  <div class="mdl-card__actions mdl-card--border">
    <a href={`/person/${person.id}/edit`} class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      Edit information
    </a>
  </div>
</div>

<style>
  .person-card.mdl-card {
    width: 320px;
    height: 320px;
  }
  .person-card > .mdl-card__title {
    color: #fff;
    background:
      url('../assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;
  }
  </style>
