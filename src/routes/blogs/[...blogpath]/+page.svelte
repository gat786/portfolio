<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  import { onMount } from 'svelte';

  onMount(() => {
    const blogContent = document.getElementById('blog-content');
    if (blogContent != null) {
      blogContent.innerHTML = data.content;
    }
  });

</script>

<head>
  <title>{data.front_matter.title}</title>
</head>
<div>
  <article id="blog-content" class="prose dark:prose-invert">

  </article>
</div>
