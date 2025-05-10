<script>
  // ─── Parent Component State & Helpers ─────────────────────────────
  import {page} from "$app/stores";
  import {onMount} from "svelte";
  import {blur,fly} from "svelte/transition";
  import SearchComp from "./SearchComp.svelte";
  import DarkModeToggle from "./common/DarkModeToggle.svelte";
  
  let showSearchComp = false;
  let showNavbarSmall = false;
  $: pathName = $page.url.pathname;

  const navItems = [
    { label: "Home", ref: "/" },
    { label: "Timeline", ref: "/timeline" },
    { label: "Skills", ref: "/skills" },
    { label: "Contact", ref: "/contact" },
    { label: "Bio", ref: "/resume" },
  ];

  const toggleSearch = () => {
    showSearchComp = !showSearchComp;
  };

  const toggleMobileNav = () => {
    showNavbarSmall = !showNavbarSmall;
  };

  let texts = ["Rohan Nikumbh", "Portfolio"];
  let currentIndex = 0;
  let currentText = texts[currentIndex];
  let show = true;

  let theme = 'light';

  function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    }
  }

  onMount(() => {
    const interval = setInterval(() => {
      show = false; // Start blur out
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        currentText = texts[currentIndex];
        show = true; // Blur in new text
      }, 300); // Match blur duration
    }, 4000);
    return () => clearInterval(interval);
  });

  let touchStartX = 0;

  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    const touchEndX = event.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) { // 50px threshold for left swipe
      toggleMobileNav();
    }
  }
</script>

<section id="DesktopHeader">
  <div class="h-12 w-12 fixed bottom-4 right-10 hidden md:inline-block">
    <DarkModeToggle {theme} {toggleTheme}/>
  </div>
  <header class="fixed hidden md:inline-block inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md bg-[#221f1f2f] dark:bg-white/70 py-3 shadow backdrop-blur-lg dark:backdrop-blur-sm md:top-6 md:rounded-3xl lg:max-w-screen-lg transition-all duration-500">
    <div class="px-4">
      <div class="flex items-center justify-between ">
        <!-- Logo -->
        <a href="/" class="flex items-center ">
          <!-- <img src="/sparcle.svg" alt="sparcle" class="h-6 w-6"> -->
          <div class="flex justify-center items-center flex-row text-xl text-zinc-700 font-semibold  {currentText == "Portfolio" && 'pr-[68px]'}">
            {#if show}
              <span 
                class="!font-sans bg-gradient-to-r  from-[#000000] via-[#a5a5a5]  to-[#000000] bg-[200%_auto] animate-gradient-move text-transparent bg-clip-text"
                in:blur={{ duration: 500 }}
                out:blur={{ duration: 500 }}
              >
                {currentText}
                <img 
                  src="/sparcle.svg" 
                  alt="sparcle" 
                  class="text-primary  h-6 w-6 pl-0.5 pb-0.5 transition-all duration-300 inline-block"
                >
              </span>
            {/if}
            
           </div>
          <p class="sr-only">Rohan Nikumbh's Portfolio</p>
        </a>

        <!-- Nav Links -->
        <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
          {#each navItems as item}
            <a
              href={item.ref}
              transition:blur={{ duration: 300, delay: 100 }}
              class="px-2 py-1 text-xl font-[500] transition-all duration-200 {pathName === item.ref ? 'text-primary' : 'text-zinc-500'}"
            >
              {item.label}
            </a>
          {/each}
        </div>

        <!-- Search Toggle Button -->
        <button on:click={toggleSearch}>
          {#if !showSearchComp}
            <img src="/searchicon.svg" alt="search" class="h-6 hidden md:inline-block" in:blur={{ duration: 300, delay: 100 }}>
          {:else}
            <img src="/closeiconround.svg" alt="close" class="h-6 hidden md:inline-block" in:blur={{ duration: 300, delay: 100 }}>
          {/if}
        </button>
        <!-- Theme Toggle Button -->
      </div>

      <!-- Search Component (only visible when toggled) -->
      {#if showSearchComp}
        <div class="px-3 transition-all sm:hidden md:block">
          <SearchComp toggle={() => showSearchComp = false} />
        </div>
      {/if}
    </div>
  </header>
</section>

<section id="MobileHeader" class="block md:hidden">
  <header class="h-auto fixed top-0 w-full z-[40] rounded-3xl p-2 bg-transparent ">
    <div class="h-[60px] rounded-3xl bg-primary-dark dark:bg-black/50 bg-opacity-70 backdrop-blur-[10px] flex items-center px-5 justify-between">
      <div class="flex justify-center items-center flex-row text-xl text-zinc-400 ">
        {#if show}
          <span 
            class="!font-sans bg-gradient-to-r  from-[#ffffff]  via-[#7f7f7f]  to-[#ffffff] dark:from-[#ffffff]  dark:via-[#484848]  dark:to-[#ffffff]    bg-[200%_auto] animate-gradient-move text-transparent bg-clip-text"
            in:blur={{ duration: 500 }}
            out:blur={{ duration: 500 }}
          >
            {currentText}
            <img 
              src="/sparcle.svg" 
              alt="sparcle" 
              class="text-primary h-6 w-6 pl-0.5 transition-all duration-300 inline-block pb-0.5"
            >
          </span>
        {/if}
        
       </div>
      <!-- Hamburger icon to toggle mobile sidebar -->
      <img src="/hamburger.svg" alt="menu" class="cursor-pointer w-7" on:click={toggleMobileNav}>
    </div>
  </header>
</section>

{#if showNavbarSmall}
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <section id="MobileSidebar">
    <!-- Background overlay layers with fly transitions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div 
      in:fly={{ duration: 200, x: "-100%" }} 
      out:fly={{ duration: 2000, x: "-400%", delay: 200 }} 
      class="bg-primary-dark dark:bg-zinc-900 fixed h-[100vh] w-full z-[500] p-2 ease-in" 
      style="will-change: transform;"
      on:click={toggleMobileNav}>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div 
      in:fly={{ duration: 500, x: "-300%" }} 
      out:fly={{ duration: 1700, x: "-350%", delay: 45 }} 
      class="bg-primary fixed h-[100vh] w-[94vw] z-[600] p-2 ease-in" 
      style="will-change: transform;"
      on:click={toggleMobileNav}>
    </div>
    <div 
      in:fly={{ duration: 500, x: "-300%", delay: 100 }} 
      out:fly={{ duration: 1000, x: "-400%" }} 
      class="bg-white dark:bg-primary-dark fixed h-[100vh] w-[88vw] z-[700] p-2 mr-10 ease-in"
      style="will-change: transform;"
      on:touchstart={handleTouchStart}
      on:touchend={handleTouchEnd}
    >
      <div class="h-[70px] rounded-3xl bg-opacity-85 backdrop-blur-2xl flex items-center px-5 justify-between">
        <img src="/rohan-portfolio.svg" alt="rohan nikumbh" class="pt-7 dark:invert dark:hue-rotate-180 dark:saturate-200"/>
        <button on:click={toggleMobileNav}>
          <img src="/cross.svg" alt="close" class="w-7">
        </button>
      </div>
      <div class="h-full my-auto pt-20">
        {#each navItems as item}
          <a
            href={item.ref}
            on:click={toggleMobileNav}
            transition:blur={{ duration: 300, delay: 100 }}
            class="px-2 py-1 m-4 block text-3xl rounded-2xl transition-all duration-200 {pathName === item.ref ? '!text-primary' : 'text-[#342121b4] dark:text-[#afafaf]'}"
          >
            {item.label}
          </a>
        {/each}
        <div class="mt-8">
          <DarkModeToggle {theme} {toggleTheme}/>
        </div>
      </div>
    </div>
  </section>
{/if}


