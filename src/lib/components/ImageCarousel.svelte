<script lang="ts">
	import { onMount } from 'svelte';
	import type { Image } from '$lib/models/image';

	let { images }: { images: Image[] } = $props();

	let swiperEl: HTMLElement & { swiper: { slideNext: () => void; slidePrev: () => void } } | null =
		$state(null);

	onMount(() => {
		if (swiperEl) swiperEl.swiper;
	});

	const slideNext = () => swiperEl?.swiper.slideNext();
	const slidePrev = () => swiperEl?.swiper.slidePrev();
</script>

<div class="relative">
	{#if images.length > 1}
		<p class="mb-2 text-center text-xs font-thin text-gray-400 dark:text-gray-500">
			← swipe to see more photos →
		</p>
	{/if}
	<swiper-container bind:this={swiperEl} class="h-80" loop={images.length > 1}>
		{#each images as image (image.url)}
			<swiper-slide>
				<img
					src={image.url}
					alt={image.alt}
					class="mx-auto h-72 rounded-xl object-contain shadow-md"
				/>
				<p class="mt-2 text-center text-xs font-thin text-gray-500 dark:text-gray-400">
					{image.alt}
				</p>
			</swiper-slide>
		{/each}
	</swiper-container>
	{#if images.length > 1}
		<button
			type="button"
			onclick={slidePrev}
			aria-label="Previous photo"
			class="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md transition-colors hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
		>
			<span class="material-icons-outlined text-gray-700 dark:text-gray-200">chevron_left</span>
		</button>
		<button
			type="button"
			onclick={slideNext}
			aria-label="Next photo"
			class="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md transition-colors hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
		>
			<span class="material-icons-outlined text-gray-700 dark:text-gray-200">chevron_right</span>
		</button>
	{/if}
</div>
