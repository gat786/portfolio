<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<head>
  <title>This is blogs page</title>
</head>
<article class="my-8">
  <h2 class="text-2xl mb-4">Blogs List :-</h2>
  <ol type="1">
    {#each data.blogs as blog}
      <li>
        <a href={`blogs/${blog.front_matter.url_postfix}`}>
          {blog.front_matter.title} - { blog.front_matter.created_on.toLocaleDateString()}
        </a>
      </li>
    {/each}
  </ol>
</article>
