<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<style>
  /* change border color from white to yellow to green to red in every 0.5 seconds */
  .border-animated {
    animation: border-color 2s infinite;
  }

  @keyframes border-color {
    0% {
      border-color: white;
    }
    25% {
      border-color: yellow;
    }
    50% {
      border-color: green;
    }
    75% {
      border-color: red;
    }
    100% {
      border-color: white;
    }
  }
</style>

<head>
  <title>Blogs written by Ganesh</title>
</head>
<article class="my-8">
  <div class="my-8 border border-animated p-2">
    Click here to read my devops related blogs - 
    <a href="https://devops-stuff.dev" target="_blank" class="hover:scale-50">DevOps Blogs</a>
  </div>

  <h2 class="text-2xl font-thin">Blogs List :-</h2>
  <ol type="1">
    {#each data.blogs as blog}
      <li class="py-8 border-b border-slate-300">
        <a href={`blogs/${blog.front_matter.url_postfix}`}>
          <h2 class="text-2xl font-bold mb-4">
            {blog.front_matter.title} <br />
          </h2>
          <p class="font-thin text-sm">
            Created on - { blog.front_matter.created_on.toLocaleDateString() } <br />
            Author('s) - { blog.front_matter.authors.join(', ') }
          </p>
        </a>
      </li>
    {/each}
  </ol>
</article>
