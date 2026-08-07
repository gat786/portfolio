<svelte:head>
	<title>About Ganesh Tiwari</title>
</svelte:head>

<div>
	<div class="my-8">
		<article class="about-css">
			<ul>
				<li>
					<h1>Name -</h1>
					<h2>Ganesh Tiwari</h2>
				</li>

				<li>
					<h1>Age -</h1>
					<h2>25</h2>
				</li>

				<li>
					<h1>Education -</h1>
					<h2>M.Sc in Computer Science from the University of Mumbai</h2>
				</li>

				<li>
					<h1>Profession</h1>
					<h2>
						Software Engineer, Working as a Professional DevOps Engineer at
						<a
							class="text-blue-500 underline decoration-blue-300 underline-offset-2 transition-colors hover:text-blue-600 dark:text-blue-400"
							href="https://www.nethermind.io/">Nethermind</a
						>
					</h2>
				</li>

				<li>
					<h1>Location -</h1>
					<h2>Mumbai, India (Barely) (IST +5:30)</h2>
				</li>
				<li>
					<h1>What do I do?</h1>
					<h2>
						I write code, make memes, do gym and play games. And a lot of other things in between.
					</h2>
				</li>
			</ul>
		</article>
	</div>
</div>

<style>
	h1 {
		font-size: 1.75rem;
		font-weight: 600;
		letter-spacing: -0.01em;
		margin-bottom: 0.5rem;
	}

	h2 {
		font-size: 1.2rem;
		font-weight: 400;
		line-height: 1.6;
	}

	li {
		margin-block: 2rem;
		padding-left: 1rem;
		border-left: 3px solid var(--color-gray-300);
	}

	:global(.dark) li {
		border-left-color: var(--color-gray-600);
	}
</style>
