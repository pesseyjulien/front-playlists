<script>
  import { borderRadius } from "../theme";
  import { setResults } from "../stores";

  let search = "";

  function handleSearch() {
    setResults(search);
  }
</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .inputField {
    border-radius: var(--borderRadius);
  }
  .button {
    border-radius: var(--borderRadius);
  }
</style>

<div class="wrapper" style="--borderRadius: {borderRadius}">
  <input
    class="inputField"
    type="text"
    placeholder="Rechercher un artiste"
    bind:value={search} />
  <button class="button" type="button" on:click={handleSearch}>
    Rechercher
  </button>
</div>
