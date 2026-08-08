<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.front_matter.title}</title>
</svelte:head>

<div>
	<div class="my-4 border-b border-slate-200 pb-4 font-thin dark:border-gray-700">
		<div>
			Created on - {data.front_matter.created_on.toLocaleDateString()}
		</div>
		<div>
			Author('s) - {data.front_matter.authors.join(', ')}
		</div>
	</div>
	<article class="prose dark:prose-invert">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -- own markdown, rendered at build time -->
		{@html data.content}
	</article>
</div>
