<script lang="ts">
	import '../app.css';

	import 'material-icons/iconfont/material-icons.css';
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	import { register } from 'swiper/element/bundle';

	register();

	let { children } = $props();

	let theme: 'light' | 'dark' = $state('light');

	onMount(() => {
		theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
	});

	const toggleTheme = () => {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.classList.toggle('dark', theme === 'dark');
		localStorage.setItem('theme', theme);
	};

	const nav_links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/blogs', label: 'Blogs' },
		{ href: '/videos', label: 'Videos' },
		{ href: '/events', label: 'Events' },
		{ href: '/send-ping', label: 'Reach out to me' }
	];

	const isActive = (href: string) =>
		href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
</script>

<div class="flex flex-col items-center">
	<div class="w-5/6 max-w-2xl lg:w-3/4">
		<div>
			<div class="my-8 flex w-full flex-wrap items-center justify-between gap-3">
				<a class="text-5xl font-bold tracking-tight" href="/">Gats.dev</a>
				<button
					type="button"
					onclick={toggleTheme}
					aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
					class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:outline-none dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
				>
					<span class="material-icons-outlined">
						{theme === 'dark' ? 'light_mode' : 'dark_mode'}
					</span>
				</button>
			</div>
			<nav class="my-2">
				<ul class="flex flex-wrap gap-2">
					{#each nav_links as link (link.href)}
						<li>
							<a
								href={link.href}
								class="block rounded-lg border px-3 py-1 transition-colors {isActive(link.href)
									? 'border-gray-800 bg-gray-800 text-white dark:border-gray-200 dark:bg-gray-200 dark:text-gray-900'
									: 'border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700'}"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
		{@render children()}
	</div>
</div>
