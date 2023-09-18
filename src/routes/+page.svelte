<script lang="ts">
	import { image_urls } from "$lib/constants";
</script>

<head>
	<title>Portfolio</title>
</head>
<div>

	<div class="m-2 my-8">
		<div class="my-4">
			<p class="font-thin">
				<span>
					Hello!<br />
				</span>
				<span class="flex gap-2" title="Send me a message about how you feel">
					How are you doing?
					<a href="mailto:me@gats.dev">
						<span class="material-icons-outlined dark:text-white text-gray-700">mail</span><br />
					</a>
				</span>
			</p>
			<div class="font-light text-2xl mt-4">I am</div>
		</div>
		<h1 class="text-4xl font-bold">Ganesh Tiwari</h1>
		<div class="my-4"> This is me 👇 </div>

		<swiper-container class="h-96">
			{#each image_urls as image_url}
				<swiper-slide>
					<img src={image_url.url} class="h-96" alt={image_url.alt}>
				</swiper-slide>
			{/each}
		</swiper-container>


		<div class="flex flex-col gap-2 my-4 font-light">
			I am a
			<ul style="list-style-type:disc;" class="ml-4">
				<li>very passionate Software Engineer</li>
				<li>
					DevOps Engineer at <a class="underline text-blue-400" href="https://nethermind.io"
						>Nethermind</a
					>
				</li>
				<li>very friendly person (🔫 you have to agree with this)</li>
				<li>Fun person to talk to <strong>(I would like to think so atleast)</strong></li>
			</ul>
		</div>

		<div class="flex flex-col gap-2 my-4 font-light">
			I normally do
			<ul style="list-style-type:disc;" class="ml-4">
				<li>Write a lot of code <i>(mostly that people dont understand)</i></li>
				<li>Try to make funny memes <i>(again that people dont understand)</i></li>
				<li>
					Do a lot of GYM <i>(this is because I failed to make people understand my code and memes)</i>
				</li>
				<li>Love to learn musical things <i>(I am learning keyboard 🎹 right now, 🙏 for me)</i></li>
				<li>I love to learn new things & solve problems</li>
				<li>Reading History and Geography books</li>
			</ul>
		</div>
	</div>
</div>
