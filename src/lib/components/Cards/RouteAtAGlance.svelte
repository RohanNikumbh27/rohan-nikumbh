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
    <!-- Decorative Bar: same visuals, fewer nodes -->
    <div class="decor-bar mb-5" aria-hidden="true">
      <span class="center-pill"></span>
    </div>
    
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

<style>
  /* Primary color to match `bg-primary` (#E50914) */
  :root {
    --primary: #e50914;
    --primary-40: rgba(229, 9, 20, 0.4);
  }

  .decor-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4px;
    left: 10px;
  }

  /* Left bar */
  .decor-bar::before {
    content: "";
    position: absolute;
    left: -20px;
    right: 50%;
    height: 4px;
    border-radius: 50px;
    background: linear-gradient(to right, var(--primary-40), var(--primary));
  }

  /* Right bar (mirror) */
  /* .decor-bar::after {
    content: "";
    position: absolute;
    left: 50%;
    right: 0;
    height: 4px;
    border-radius: 9999px;
    background: linear-gradient(to left, var(--primary-40), var(--primary));
    animation: pulseFade 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  } */

  /* Center pill: w-3 h-1 rounded-full bg-primary */
  .center-pill {
    position: relative;
    width: 0.75rem; 
    height: 0.25rem;
    border-radius: 50px;
    background: var(--primary);
    z-index: 1;
  }

  @keyframes pulseFade {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
</style>
