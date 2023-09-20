<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<head>
  <title>This is blogs page</title>
</head>
<article class="my-8">
  <h2 class="text-2xl font-thin">Blogs List :-</h2>
  <ol type="1">
    {#each data.blogs as blog}
      <li class="py-8 border-b border-slate-300">
        <a href={`blogs/${blog.front_matter.url_postfix}`}>
          <h2 class="text-2xl font-bold mb-4">
            {blog.front_matter.title} <br />
          </h2>
          <p class="font-thin text-sm">
            Created on - { blog.front_matter.created_on.toLocaleDateString()} <br />
            Author('s) - {blog.front_matter.authors.join(', ')}
          </p>
        </a>
      </li>
    {/each}
  </ol>
</article>
