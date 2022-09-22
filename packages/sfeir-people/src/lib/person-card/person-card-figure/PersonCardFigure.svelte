<script lang="ts">
  export let name: string;
  export let photoUrl: string;
</script>

<figure>
  <img
    src={photoUrl}
    alt={`face of ${name}`}
  />
</figure>

<style>
  figure {
    margin: 0;
    float: right;
  }
  figure > img {
    margin: 10px;
    border-radius: 50%;
    width: 128px;
    height: 128px;
  }
</style>
