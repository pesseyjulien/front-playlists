<script>
  import Result from "./Result.svelte";
  import { results } from "../stores";

  console.log($results);
</script>

<div class="wrapper">
  {#each $results.data as { name }}
    <Result {name} />
  {/each}
</div>
