<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Blogs written by Ganesh</title>
</svelte:head>

<article class="my-8">
	<div class="border-animated my-8 rounded-lg border p-3">
		Click here to read my devops related blogs -
		<a
			href="https://devops-stuff.dev"
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium text-blue-500 underline decoration-blue-300 underline-offset-2 transition-colors hover:text-blue-600 dark:text-blue-400"
			>DevOps Blogs</a
		>
	</div>

	<h2 class="text-2xl font-thin">Blogs List :-</h2>
	<ol>
		{#each data.blogs as blog (blog.front_matter.url_postfix)}
			<li
				class="group my-4 rounded-xl border border-slate-200 transition-all hover:border-slate-300 hover:shadow-md dark:border-gray-700 dark:hover:border-gray-500"
			>
				<a class="block p-6" href={`blogs/${blog.front_matter.url_postfix}`}>
					<h2
						class="mb-3 text-2xl font-bold transition-colors group-hover:text-blue-500 dark:group-hover:text-blue-400"
					>
						{blog.front_matter.title}
					</h2>
					<p class="text-sm font-thin text-gray-600 dark:text-gray-300">
						Created on - {blog.front_matter.created_on.toLocaleDateString()} <br />
						Author('s) - {blog.front_matter.authors.join(', ')}
					</p>
				</a>
			</li>
		{/each}
	</ol>
</article>

<style>
	/* cycle the border color for a bit of personality */
	.border-animated {
		animation: border-color 4s ease-in-out infinite;
	}

	@keyframes border-color {
		0% {
			border-color: white;
		}
		25% {
			border-color: gold;
		}
		50% {
			border-color: mediumseagreen;
		}
		75% {
			border-color: tomato;
		}
		100% {
			border-color: white;
		}
	}
</style>
