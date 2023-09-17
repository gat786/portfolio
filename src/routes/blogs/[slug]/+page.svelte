<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<div>
    {data.content}
  </div>
</article>
