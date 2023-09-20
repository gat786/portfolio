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
  <div class="font-thin my-4">
    <div>
      Created on - {data.front_matter.created_on.toLocaleDateString()}
    </div>
    <div>
      Author('s) - {data.front_matter.authors.join(', ')}
    </div>
  </div>
  <article id="blog-content" class="prose dark:prose-invert">
  </article>
  <article class="hidden">
    {data.content}
  </article>
</div>
