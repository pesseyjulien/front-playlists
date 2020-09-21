<script>
  import Result from "./Result.svelte";
  import { results } from "../stores";
  import { Datatable, rows } from 'svelte-simple-datatables'

  const settings = {
    sortable: true,
    pagination: true,
    rowPerPage: 50,
    columnFilter: true,
  }

  console.log($results);
</script>

<style>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th {
    background: #eee;
  }
  th, td {
    padding:10px;
  }
  table {
    text-align: left;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
</style>

<div class="wrapper">

  <table settings={settings} data={$results.data}>
    <thead>
      <th data-key="playlistName">Playlist</th>
      <th data-key="name">Titre</th>
      <th data-key="artists">Artiste</th>
      <th data-key="album">Album</th>
      <th data-key="position">Pos.</th>
      <th data-key="playlistFans">Fans</th>
      <th data-key="origin">Origin</th>
    </thead>
    <tbody>
    {#each $results.data as row}
      <tr>
        <td><a href="{row.playlistUrl}">{row.playlistName}</a></td>
        <td>{row.name}</td>
        <td>{row.artists}</td>
        <td>{row.album}</td>
        <td>{row.position}</td>
        <td> {#if row.playlistFans} {row.playlistFans} {/if}</td>
        <td>{row.origin}</td>
      </tr>
    {/each}
    </tbody>
  </table>


  <!--{#each $results.data as { name, playlistName }}-->
  <!--  <Result {name} />-->
  <!--  <Result {playlistName} />-->
  <!--{/each}-->
</div>
