<script lang="ts">
	const image_urls = [
		"https://res.cloudinary.com/dw9dzd7yh/image/upload/v1694963381/personal-photos/uthcylgsgtsxp1ytc8hi.jpg",
		"https://res.cloudinary.com/dw9dzd7yh/image/upload/v1694963272/personal-photos/v3nyo7i3u6jubbjibrdw.webp",
		"https://res.cloudinary.com/dw9dzd7yh/image/upload/v1694963269/personal-photos/grf4sr7mdphz8zk53ifc.webp",
		"https://res.cloudinary.com/dw9dzd7yh/image/upload/v1694963097/personal-photos/m5jssnvkpykfcgmnd0xj.jpg",
		"https://res.cloudinary.com/dw9dzd7yh/image/upload/v1694963078/personal-photos/tjgeq3qybb05u30dndsr.webp",
		"https://res.cloudinary.com/dw9dzd7yh/image/upload/v1694963078/personal-photos/s39up6guntwtdgb0capj.webp"
	]

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
				<span class="flex items-center gap-2" title="Send me a message about how you feel">
					How are you doing?
					<a href="mailto:me@gats.dev">
						<span class="material-icons-outlined text-gray-700">mail</span><br />
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
					<img src={image_url} class="" alt="First Image">
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
