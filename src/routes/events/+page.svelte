<script lang="ts">
	import type { PageData } from './$types';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Events by Ganesh</title>
</svelte:head>

<article class="my-8">
	<h1 class="mb-8 text-3xl font-bold tracking-tight">Events</h1>

	{#if data.events.length === 0}
		<p class="font-thin text-gray-600 dark:text-gray-300">No events yet. Check back later!</p>
	{/if}

	{#each data.events as event, i (i)}
		<div class="mb-10 rounded-xl border border-slate-200 p-6 transition-colors hover:border-slate-300 dark:border-gray-700 dark:hover:border-gray-500">
			<div class="mb-4">
				<h2 class="text-2xl font-bold">{event.title}</h2>
				<p class="mt-1 text-sm font-thin text-gray-500 dark:text-gray-400">
					{event.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
				</p>
			</div>

			{#if event.collaborators.length > 0}
				<div class="mb-3">
					<span class="text-sm font-semibold text-gray-700 dark:text-gray-300">Collaborators: </span>
					<span class="text-sm font-thin text-gray-600 dark:text-gray-400">
						{event.collaborators.join(', ')}
					</span>
				</div>
			{/if}

			{#if event.companies.length > 0}
				<div class="mb-4 flex flex-wrap gap-2">
					{#each event.companies as company (company)}
						{#if company.url}
							<a
								href={company.url}
								target="_blank"
								rel="noopener noreferrer"
								class="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium transition-colors hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
							>
								{company.name}
							</a>
						{:else}
							<span class="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium dark:border-gray-600">
								{company.name}
							</span>
						{/if}
					{/each}
				</div>
			{/if}

			<p class="mb-4 font-thin leading-relaxed text-gray-700 dark:text-gray-300">
				{event.gist}
			</p>

			{#if event.images.length > 0}
				<div class="mt-4">
					<ImageCarousel images={event.images} />
				</div>
			{/if}
		</div>
	{/each}
</article>
