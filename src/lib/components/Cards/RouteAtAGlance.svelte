<script>
  export let obj = {
    title: "Rohan Nikumbh",
    description: "Software Engineer | Tech Enthusiast",
    LinkText: "Explore",
    linkRoute: "www.rohannikumbh.me",
  };
  import { perspectiveTilt } from "$lib/utils.js";
  import { MoveRight } from "lucide-svelte";
  import { slide } from "svelte/transition";
</script>

<div class="flex items-center justify-center" use:perspectiveTilt>
  <div
    class="relative m-4 p-6 rounded-2xl bg-stone-100 dark:bg-[#ffffff1f] border-[0px] border-zinc-300 dark:border-none transition-all duration-300 max-w-[500px] flex flex-col items-center text-center max-h-[370px] hover:border-primary/40"
  >
    <!-- Decorative Bar -->
    <div class="flex items-center justify-center gap-2 mb-5">
      <div
        class="h-1 w-1/2 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full animate-pulse"
      ></div>
      <div class="h-1 w-3 bg-primary rounded-full"></div>
      <div
        class="h-1 w-1/2 bg-gradient-to-l from-primary/40 via-primary to-primary/40 rounded-full animate-pulse"
      ></div>
    </div>
    <!-- Content -->
    <div class="flex flex-col items-center text-center"></div>
    <!-- Icon -->
    <h2
      class="text-3xl font-semibold text-zinc-800 dark:text-gray-100 tracking-tight mb-2 flex items-center justify-center gap-2"
    >
      {obj.title}
    </h2>
    <p class="text-stone-500 dark:text-gray-400 text-base mb-6 overflow-auto">
      {obj.description}
    </p>

    <!-- Link Button -->
    <a
      href={obj.linkRoute}
      class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black dark:text-zinc-800 hover:bg-zinc-800 dark:bg-white text-zinc-400 hover:text-white transition duration-500 font-medium group"
    >
      <span class="font-mono shimmer-text pb-[1px] !bg-gradient-to-r !from-zinc-300 !via-zinc-950 !to-zinc-300 hover:!from-zinc-900 hover:!to-zinc-900 hover:!via-zinc-300 !bg-clip-text !text-transparent animate-shimmer">
        {obj.LinkText}
      </span>
      <span
        transition:slide={{ x: -12, duration: 300 }}
        class="transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out "
      >
        <MoveRight />
      </span>
    </a>
  </div>
</div>
