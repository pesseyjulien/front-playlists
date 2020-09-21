<script>
  import { borderRadius } from "../theme";
  import { getBySong, getByArtist } from "../api/tracker";

  let artistName = "";
  let songName = "";

  function handleSearch() {
    if(!songName.length) getByArtist(artistName)
    else getBySong(songName);
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
    id="artistSearchField"
    class="inputField"
    type="text"
    placeholder="Artiste"
    bind:value={artistName} />
  <input
    id="songSearchField"
    class="inputField"
    type="text"
    placeholder="Chanson"
    bind:value={songName} />
  <button class="button" type="button" on:click={handleSearch}>
    Rechercher
  </button>
</div>
