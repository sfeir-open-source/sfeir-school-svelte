<script lang="ts">
  export let iconName: string;
</script>

<p>
  <i
    class="material-icons"
  >
    {iconName}
  </i>
  &nbsp;
  <slot />
</p>

<style>
  p {
    margin: 0;
    display: flex;
    margin-bottom: 4px
  }
</style>
