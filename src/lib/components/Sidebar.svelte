<script>
  // ─── Parent Component State & Helpers ─────────────────────────────
  import {page} from "$app/stores";
  import {onMount} from "svelte";
  import {fly} from "svelte/transition";
  import SearchComp from "./SearchComp.svelte";
  import DarkModeToggle from "./common/DarkModeToggle.svelte";
  import Logo from "./sidebar/Logo.svelte";

  let showSearchComp = false;
  let showNavbarSmall = false;

  const navItems = [
    { label: "Home", ref: "/" },
    { label: "Timeline", ref: "/timeline" },
    { label: "Skills", ref: "/skills" },
    { label: "Contact", ref: "/contact" },
    { label: "Bio", ref: "/resume-and-certifications" },
  ];

  const toggleSearch = () => {
    showSearchComp = !showSearchComp;
  };

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
</script>

<section id="DesktopHeader">
  <div class="h-12 w-12 fixed bottom-4 right-9 hidden md:inline-block z-50">
    <DarkModeToggle {theme} {toggleTheme} />
  </div>
  <header
    class="fixed hidden md:inline-block inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md bg-stone-200/60 dark:bg-black/50 py-3 backdrop-blur-md md:top-6 md:rounded-3xl lg:max-w-[950px] xl:max-w-screen-lg 2xl:max-w-screen-xl"
  >
    <div class="px-0 xl:px-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex items-center">
          <Logo {show} {currentText}/>
        </a>

        <!-- Nav Links -->
        <div class="hidden md:flex md:items-center md:justify-center md:gap-2">
          {#each navItems as item}
            <div class="flex flex-col items-center justify-end">
              <a
                href={item.ref}
                class="px-2 py-1 text-xl font-[500] transition-transform duration-200 hover:scale-95 {$page
                  .url.pathname === item.ref
                  ? 'text-primary '
                  : 'text-zinc-500 hover:text-stone-700'}"
                on:click={() => trackNavClick(item.label)}
              >
                {item.label}
              </a>
            </div>
          {/each}
        </div>
      </div>
</div>
</header>
</section>

<!-- from-[#ffffff]  via-[#7f7f7f]  to-[#ffffff] dark:from-[#ffffff]  dark:via-[#484848]  dark:to-[#ffffff]   -->
<section id="MobileHeader" class="block md:hidden">
  <header
    class="h-auto fixed top-0 w-full z-[40] rounded-3xl p-2 pt-2.5 bg-transparent"
  >
    <div
      class="h-[60px] rounded-3xl bg-stone-300/60 backdrop-blur-[10px] dark:bg-black/40 flex items-center px-5 justify-between"
    >
    <Logo {show} {currentText}/>
      <!-- Hamburger icon to toggle mobile sidebar -->
      <img
        src="/hamburger.svg"
        alt="menu"
        class="cursor-pointer w-7"
        on:click={toggleMobileNav}
      />
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
      class="bg-primary-dark dark:bg-zinc-900 fixed h-[100vh] w-full z-[500] p-2 ease-in transform-cpu"
      style="will-change: transform;"
      on:click={toggleMobileNav}
    ></div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      in:fly={{ duration: 500, x: "-300%" }}
      out:fly={{ duration: 1700, x: "-350%", delay: 45 }}
      class="bg-primary fixed h-[100vh] w-[94vw] z-[600] p-2 ease-in transform-cpu"
      style="will-change: transform;"
      on:click={toggleMobileNav}
    ></div>
    <div
      in:fly={{ duration: 500, x: "-300%", delay: 100 }}
      out:fly={{ duration: 1000, x: "-400%" }}
      class="bg-white dark:bg-primary-dark fixed h-[100vh] w-[88vw] z-[700] p-2 mr-10 ease-in transform-cpu"
      style="will-change: transform;"
      on:touchstart={handleTouchStart}
      on:touchend={handleTouchEnd}
    >
      <div
        class="h-[70px] rounded-3xl flex items-center px-5 justify-between pt-5"
      >
        <img
          src="/rohan-portfolio.svg"
          alt="rohan nikumbh"
          class="dark:invert dark:hue-rotate-180 dark:saturate-200"
        />
        <button on:click={toggleMobileNav}>
          <img src="/cross.svg" alt="close" class="w-7" />
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
              : 'text-[#342121b4] dark:text-[#afafaf]'}"
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
