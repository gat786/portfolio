<script lang="ts">
	import { personal_image_urls, cloudinary_prefix } from '$lib/constants';
</script>

<svelte:head>
	<title>Ganesh Tiwari's Portfolio</title>
</svelte:head>

<div>
	<div class="my-8">
		<div class="my-4">
			<div class="font-thin">
				<span>
					Hello!<br />
				</span>
				<span class="flex items-center gap-2" title="Send me a message about how you feel">
					How are you doing?
					<a
						href="mailto:me@gats.dev"
						class="transition-transform hover:-translate-y-0.5"
						aria-label="Email me"
					>
						<span class="material-icons-outlined text-gray-700 dark:text-white">mail</span>
					</a>
				</span>
			</div>
			<div class="mt-4 text-2xl font-light">I am</div>
		</div>
		<h1 class="text-4xl font-bold tracking-tight">Ganesh Tiwari</h1>
		<div class="my-4">This is me 👇</div>

		<swiper-container class="h-96" loop="true">
			{#each personal_image_urls as image_url (image_url.url)}
				<swiper-slide>
					<img
						src={cloudinary_prefix + image_url.url}
						class="h-80 rounded-xl shadow-md"
						alt={image_url.alt}
					/>
					<i class="my-8 text-sm font-thin text-gray-600 dark:text-gray-300">{image_url.alt}</i>
				</swiper-slide>
			{/each}
		</swiper-container>

		<div class="my-4 flex flex-col gap-2 font-light">
			I am a
			<ul class="ml-4 list-disc marker:text-gray-400">
				<li>very passionate Software Engineer</li>
				<li>
					DevOps Engineer at <a
						class="text-blue-500 underline decoration-blue-300 underline-offset-2 transition-colors hover:text-blue-600 dark:text-blue-400"
						href="https://nethermind.io">Nethermind</a
					>
				</li>
				<li>very friendly person <i>(🔫 you have to agree with this)</i></li>
				<li>Fun person to talk to <strong>(I would like to think so atleast)</strong></li>
			</ul>
		</div>

		<div class="my-4 flex flex-col gap-2 font-light">
			I normally do
			<ul class="ml-4 list-disc marker:text-gray-400">
				<li>Write a lot of code <i>(mostly that people dont understand)</i></li>
				<li>Try to make funny memes <i>(again that people dont understand)</i></li>
				<li>
					Healthy amount of GYM <i
						>(this is because I failed to make people understand my code and memes)</i
					>
				</li>
				<li>
					Love to learn musical things <i>(I am learning keyboard 🎹 right now, 🙏 for me)</i>
				</li>
				<li>I love to learn new things & solve problems</li>
				<li>Reading History and Geography books</li>
			</ul>
		</div>
	</div>
</div>
