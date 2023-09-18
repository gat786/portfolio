<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<head>
  <title>This is blogs page</title>
</head>
<article class="m-2 my-4">
  <h2 class="text-2xl mb-4 mt-8">Blogs List :-</h2>
  <ul>
    {#each data.file_names as blog}
      <li>
        <a href={`blogs/${blog}`}>{blog}</a>
      </li>
    {/each}
  </ul>
</article>
