<script>
  import Result from "./Result.svelte";
  import { results } from "../stores";
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";

  console.log($results);
</script>

<style>
  .row:nth-child(even) {
    background-color: #f2f2f2;
  }
</style>

<div class="wrapper">
  {#if $results.data.length > 0}
    <DataTable table$aria-label="songs">
      <Head>
        <Row>
          <Cell>Playlist</Cell>
          <Cell>Titre</Cell>
          <Cell>Artiste</Cell>
          <Cell>Album</Cell>
          <Cell>Pos.</Cell>
          <Cell>Fans</Cell>
          <Cell>Origin</Cell>
        </Row>
      </Head>
      <Body>
        {#each $results.data as row}
          <Row class="row">
            <Cell>
              <a href={row.playlistUrl}>{row.playlistName}</a>
            </Cell>
            <Cell>{row.name}</Cell>
            <Cell>{row.artists}</Cell>
            <Cell>{row.album}</Cell>
            <Cell>{row.position}</Cell>
            <Cell>
              {#if row.playlistFans}{row.playlistFans}{/if}
            </Cell>
            <Cell>{row.origin}</Cell>
          </Row>
        {/each}
      </Body>
    </DataTable>
  {:else}
    <p>Pas de résultats à afficher</p>
  {/if}
</div>
