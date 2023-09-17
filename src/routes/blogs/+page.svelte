<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<head>
  <title>This is blogs page</title>
</head>
<article class="prose">
  <h1>Here will be my list of all the blogs that I will possibly write</h1>
  <ul>
    {#each data.file_names as blog}
      <li>
        <a href={blog}>{blog}</a>
      </li>
    {/each}
  </ul>
</article>
