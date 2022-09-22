<script lang="ts">
  export let value: string = "";
  export let label: string = "";
  export let id: string = "";
</script>

<div class="mdl-textfield mdl-js-textfield">
  <input class="mdl-textfield__input" type="text" {id} bind:value />
  <label class="mdl-textfield__label" for={id}>{label}</label>
</div>
