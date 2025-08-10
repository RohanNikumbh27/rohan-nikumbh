<script>
  // ─── Parent Component State & Helpers ─────────────────────────────
  import { page } from "$app/stores";
  import { onMount, tick } from "svelte";
  import { cubicOut, quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import DarkModeToggle from "./common/DarkModeToggle.svelte";
  import Logo from "./sidebar/Logo.svelte";

  let showNavbarSmall = false;

  const navItems = [
    { label: "Home", ref: "/" },
    { label: "Timeline", ref: "/timeline" },
    { label: "Skills", ref: "/skills" },
    { label: "Contact", ref: "/contact" },
    { label: "Bio", ref: "/resume-and-certifications" },
  ];

  const toggleMobileNav = () => {
    showNavbarSmall = !showNavbarSmall;
  };

  let pendingRoute = null;

  const closeMobileNav = () => {
    showNavbarSmall = false;
    pendingRoute = null;
  };

  function handleMobileNavClick(ref) {
    pendingRoute = ref;
    setTimeout(() => closeMobileNav(), 30);
  }

  let texts = ["Rohan Nikumbh", "Portfolio"];
  let currentIndex = 0;
  let currentText = texts[currentIndex];
  let show = true;

  let theme = "light";

  function toggleTheme() {
    theme = theme === "light" ? "dark" : "light";
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
    if (window.gtag) {
      window.gtag('event', 'toggle_theme', {
        event_category: 'Theme',
        event_label: theme
      });
    }
  }

  onMount(() => {
    const interval = setInterval(() => {
      show = false;
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        currentText = texts[currentIndex];
        show = true;
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  });

  let touchStartX = 0;

  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    const touchEndX = event.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      // 50px threshold for left swipe
      toggleMobileNav();
    }
  }

  function trackNavClick(label) {
    if (window.gtag) {
      window.gtag("event", "navigation_click", {
        event_category: "Navigation",
        event_label: label,
      });
    }
  }

  // ─── A11y: focus management + Esc to close for mobile sidebar ─────
  let sidebarEl;
  $: if (showNavbarSmall) {
    // focus the panel when it opens
    tick().then(() => sidebarEl?.focus());
  }
  function onWindowKeydown(e) {
    if (e.key === "Escape" && showNavbarSmall) closeMobileNav();
  }
</script>

<svelte:window on:keydown={onWindowKeydown} />

<section id="DesktopHeader">
  <div class="h-12 w-12 fixed bottom-4 right-9 hidden md:inline-block z-50">
    <DarkModeToggle {theme} {toggleTheme} />
  </div>
  <header
    class="fixed hidden md:inline-block inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md bg-stone-200/60 dark:bg-[#ffffff1f] py-3 backdrop-blur-2xl md:top-6 md:rounded-3xl lg:max-w-[950px] xl:max-w-screen-lg 2xl:max-w-screen-xl"
  >
    <div class="px-0 xl:px-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex items-center" aria-label="Rohan Nikumbh's Portfolio">
          <Logo {show} {currentText}/>
        </a>

        <!-- Nav Links -->
        <nav class="hidden md:flex md:items-center md:justify-center md:gap-2" aria-label="Main">
          {#each navItems as item}
            <a
              href={item.ref}
              class="px-2 py-1 text-xl font-[500] transition-all duration-200 hover:scale-95 {$page
                .url.pathname === item.ref
                ? 'text-primary '
                : 'text-stone-900 hover:text-stone-500 dark:text-zinc-100 dark:hover:text-zinc-400'}"
              aria-current={$page.url.pathname === item.ref ? "page" : undefined}
              on:click={() => trackNavClick(item.label)}
            >
              {item.label}
            </a>
          {/each}
        </nav>
      </div>
    </div>
  </header>
</section>

<section id="MobileHeader" class="block md:hidden">
  <header
    class="h-auto fixed top-0 w-full z-[40] rounded-3xl p-2 pt-2.5 bg-transparent"
  >
    <div
      class="h-[60px] rounded-3xl bg-stone-300/60 backdrop-blur-2xl dark:bg-[#ffffff1f] flex items-center px-5 justify-between"
    >
      <Logo {show} {currentText}/>
      <button
        type="button"
        class="cursor-pointer p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Open menu"
        aria-controls="mobile-sidebar-panel"
        aria-expanded={showNavbarSmall}
        on:click={toggleMobileNav}
      >
        <img
          src="/hamburger.svg"
          alt=""
          width="28"
          height="28"
          class="w-7 h-7"
          aria-hidden="true"
        />
      </button>
    </div>
  </header>
</section>

{#if showNavbarSmall}
  <section id="MobileSidebar">
    <!-- Secondary gray layer -->
    <div
      in:fly={{ duration: 180, x: "-100%"}}
      out:fly={{ duration: 2000, x: "-400%", delay: 200, easing: quintOut }}
      class="bg-primary-dark dark:bg-zinc-900 fixed h-[100vh] w-full z-[500] p-2 ease-in transform-cpu"
      style="will-change: transform;"
      on:click={toggleMobileNav}
      aria-hidden="true"
    />
    <!-- Primary red layer -->
    <div
      in:fly={{ duration: 480, x: "-300%",  delay: 10 }}
      out:fly={{ duration: 1700, x: "-350%", delay: 40, easing: quintOut }}
      class="bg-primary fixed h-[100vh] w-[94vw] z-[600] p-2 ease-in transform-cpu"
      style="will-change: transform;"
      on:click={toggleMobileNav}
      aria-hidden="true"
    />
    <!-- Foreground white panel -->
    <div
      in:fly={{ duration: 500, x: "-300%", delay: 100}}
      out:fly={{ duration: 1000, x: "-400%", easing: quintOut }}
      class="bg-white dark:bg-zinc-800 fixed h-[100vh] w-[88vw] z-[700] p-2 mr-10 ease-in transform-cpu"
      style="will-change: transform;"
      on:touchstart={handleTouchStart}
      on:touchend={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      id="mobile-sidebar-panel"
      tabindex="-1"
      bind:this={sidebarEl}
    >
      <div
        class="h-[70px] rounded-3xl flex items-center px-5 justify-between pt-5"
      >
        <img
          src="/rohan-portfolio.svg"
          alt="Rohan Nikumbh"
          class="dark:invert dark:hue-rotate-180 dark:saturate-200"
        />
        <button type="button" on:click={toggleMobileNav} aria-label="Close menu" class="p-2 rounded-md focus-visible:ring-2 focus-visible:ring-primary">
          <img src="/cross.svg" alt="" class="w-7 h-7" width="28" height="28" aria-hidden="true" />
        </button>
      </div>
      <div class="h-full my-auto pt-20">
        {#each navItems as item}
          <a
            href={item.ref}
            on:click={() => { handleMobileNavClick(item.ref); trackNavClick(item.label); }}
            class="px-2 py-1 m-4 block text-3xl rounded-2xl {(
              pendingRoute
                ? pendingRoute === item.ref
                : $page.url.pathname === item.ref
            )
              ? '!text-primary'
              : 'text-[#342121b4] dark:text-stone-400'}"
            aria-current={(pendingRoute ? pendingRoute === item.ref : $page.url.pathname === item.ref) ? 'page' : undefined}
          >
            {item.label}
          </a>
        {/each}
        <div class="mt-8">
          <DarkModeToggle {theme} {toggleTheme} />
        </div>
      </div>
    </div>
  </section>
{/if}
