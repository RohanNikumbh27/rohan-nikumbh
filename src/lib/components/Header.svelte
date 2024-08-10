<script>
  import SearchComp from "./SearchComp.svelte";
  import {page} from "$app/stores"
  $:pathName = $page.url.pathname;



  let NavOptionsArr = [
                  {
                    label: "Home",
                    ref: "/"
                  },
                  {
                    label: "Work",
                    ref: "/work"
                  },
                  // {
                  //   label: "Projects",
                  //   ref: "/projects"
                  // },
                  {
                    label: "About",
                    ref: "/about"
                  },
                  {
                    label: "Skills",
                    ref: "/skills"
                  },
                  {
                    label: "Contact",
                    ref: "/contact"
                  },
                  {
                    label: "Resume",
                    ref: "/resume"
                  },
                ]

  let showSearchComp = false;
  let showNavbarSmall = false;
  const toggleShowSearchComp = () => {
    showSearchComp = !showSearchComp;
  };
  const toggleNavBar = () => {
    showNavbarSmall = !showNavbarSmall;
  };
  
  const handleSeachBarButton = () => {
    toggleShowSearchComp();
    toggleNavBar();
    
  }
  // $:console.log("showNavbarSmall", showNavbarSmall)
</script>

<header
  class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg bg-slate-300 "
>
  <div class="px-4">
    <div class="flex items-center justify-between">
      <div class="flex shrink-0">
        <a aria-current="page" class="flex items-center" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-black">
            <path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd" />
            </svg>

          <p class="sr-only">Website Title</p>
        </a>
      </div>
      <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
        {#each NavOptionsArr as NavOption, i}
        <a
          class="px-2 pt-1 transition-all duration-200 font-bold  rounded-2xl {pathName === NavOption.ref ? "text-black ": "text-zinc-500"}"
          href={NavOption.ref}>{NavOption.label}</a
          >
        {/each}
        
        </div>
      <button class="" on:click={handleSeachBarButton}>
        <!-- for small devices -->
        {#if !showNavbarSmall}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-black md:hidden sm:inline-block">
          <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
        {:else}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-black md:hidden sm:inline-block">
         <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
        {/if}



        <!-- for medium devices -->
        {#if !showSearchComp}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-black md:inline-block sm:hidden hidden">
            <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clip-rule="evenodd" />
          </svg>
        {:else}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-black md:inline-block sm:hidden hidden">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
              </svg>

        {/if}
          
      </button>
    </div>
    <div class="px-3 transition-all sm:hidden hidden {showSearchComp ? 'md:block' : 'md:hidden'}">
      <SearchComp />
    </div>

    <!-- Navbar for small divices -->
    <div class="md:hidden h-svh flex justify-center items-center {showNavbarSmall ? 'block' : 'hidden'}">
        <div class="px-3 transition-all ">
            <div class="sm:flex sm:flex-col md:flex-row flex-wrap sm:justify-center md:gap-5">

              {#each NavOptionsArr as NavOption, i}
                <a
                  on:click={() => setTimeout(() => {
                    toggleNavBar()
                  }, 30)}
                  class="px-2 py-1 block md:inline-block m-4 text-3xl  transition-all duration-200 font-bold rounded-2xl {pathName === NavOption.ref ? "text-emerald-600 border-emerald-400": "text-gray-600"}"
                  href={NavOption.ref}>{NavOption.label}</a
                >
              {/each}
              </div>
            <SearchComp />
          </div>

    </div>
  </div>
</header>


