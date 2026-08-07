<svelte:head>
	<title>Contact Ganesh Somehow</title>
</svelte:head>

<div class="my-8">
	<h2 class="text-2xl font-thin">Fill this form and send to send a message to me</h2>
	<i class="text-gray-600 dark:text-gray-300">I might or might not read it.</i>

	<form action="" class="my-8 flex flex-col gap-4">
		<label for="name"> Name </label>
		<input
			type="text"
			name="name"
			id="name"
			placeholder="Your Name"
			class="rounded-lg border border-gray-300 bg-white p-2 text-gray-900 transition-colors focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-900"
		/>

		<label for="email"> Email </label>
		<input
			type="email"
			name="email"
			id="email"
			placeholder="Your Email"
			class="rounded-lg border border-gray-300 bg-white p-2 text-gray-900 transition-colors focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-900"
		/>

		<label for="message"> Message </label>
		<textarea
			name="message"
			id="message"
			cols="30"
			rows="10"
			placeholder="Your Message"
			class="rounded-lg border border-gray-300 bg-white p-2 text-gray-900 transition-colors focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-900"
		></textarea>

		<div class="cf-turnstile" data-sitekey="0x4AAAAAAAKu0NExklA4FHOm"></div>

		<button
			type="submit"
			class="rounded-lg border border-gray-300 py-4 font-medium transition-colors hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:outline-none dark:border-gray-600 dark:hover:bg-gray-700"
		>
			Send Message
		</button>
	</form>
</div>
