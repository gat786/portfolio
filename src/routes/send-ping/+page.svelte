<head>
	<title> Contact Ganesh Somehow </title>
</head>
<div class="my-8">
	<h2>I will add something here so that you can send some message to me directly</h2>

	<form action="" class="flex flex-col gap-4 my-8">
		<label for="name"> Name </label>
		<input type="text" name="name" id="name" placeholder="Your Name" 
      class="border p-2 dark:text-black" />

		<label for="email"> Email </label>
		<input type="email" name="email" id="email" placeholder="Your Email" 
      class="border p-2 dark:text-black" />

		<label for="message"> Message </label>
		<textarea
			name="message"
			id="message"
			cols="30"
			rows="10"
			placeholder="Your Message"
			class="border p-2 dark:text-black"
		/>

    <div class="cf-turnstile" data-sitekey="0x4AAAAAAAKu0NExklA4FHOm"></div>
    
		<button type="submit" class="border py-4"> Send Message </button>
	</form>
</div>
