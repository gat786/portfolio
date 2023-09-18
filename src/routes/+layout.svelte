<script lang="ts">
  import '../app.css';

  import 'material-icons/iconfont/material-icons.css';
	import { onMount } from 'svelte';

  import { register } from 'swiper/element/bundle';

  register();

  onMount(() => {
    const toggleTheme = () => {
      let currentTheme = localStorage.getItem('theme');
      if (currentTheme === 'dark') {
        setDarkMode()
      } else {
        setLightMode();
      }
    };
    toggleTheme();
  });

  const setLightMode = () => {
    console.log('changing theme to: light')
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }

  const setDarkMode = () => {
    console.log('changing theme to: dark')
    document.documentElement.classList.add('dark')
    let items = document.getElementsByTagName('body')
    let body = items[0]
    body.classList.add('dark:bg-gray-800') 
    localStorage.setItem('theme', 'dark')
  }
</script>

<div class="flex flex-col items-center dark:bg-gray-800 dark:text-white">
  <div class="w-5/6 lg:w-3/4 max-w-2xl">
    <div>
      <div class="p-2 flex justify-between items-center gap-3 w-full my-4">
        <h1 class="text-5xl font-bold">Gats.dev</h1>
        <div>
          <button class="border px-2" on:click={setLightMode}>Light</button>
          <button class="border px-2 bg-gray-700 text-white" on:click={setDarkMode}>Dark</button>
        </div>
      </div>
      <nav class="m-2">
        <ul class="flex flex-wrap gap-4">
          <li class="border px-2">
            <a href="/">Home</a>
          </li>
          <li class="border px-2">
            <a href="/about">About</a>
          </li>
          <li class="border px-2">
            <a href="/blogs">Blogs</a>
          </li>
          <li class="border px-2">
            <a href="/send-ping">Reach out to me</a>
          </li>
        </ul>
      </nav>
    </div>
    <slot />
  </div>
</div>
