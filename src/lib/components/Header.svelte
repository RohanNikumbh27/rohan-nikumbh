<script>
  import {page} from "$app/stores";
  import SearchComp from "./SearchComp.svelte";
  $:pathName = $page.url.pathname;
  import { SearchQ } from "$lib/store/userStore.js"
import {blur, fade, fly, scale} from "svelte/transition";


   


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
                    label: "Timeline",
                    ref: "/timeline"
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
                    label: "Bio",
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
    expanded = !expanded;
  };
  
  const handleSeachBarButton = () => {
    toggleShowSearchComp();
    toggleNavBar();
  }


  $:console.log("SearchQ", $SearchQ);
  // $:console.log("showNavbarSmall", showNavbarSmall)
  let expanded = false; // Tracks if the header is expanded
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<header
  class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md  bg-[#221f1f2f] py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg transition-all duration-500 {expanded ? 'h-full md:h-[250px] md:max-h-auto ' : 'h-[55px] md:h-[80px]'}"
>
  <div class="px-4 ">
    <div class="flex items-center justify-between">
      <div class="flex shrink-0">
        <a aria-current="page" class="flex items-center" href="/">

            <img src="\sparcle.svg" alt="sparcle" class=" text-black h-6 w-6">

          <p class="sr-only">Rohan Nikumbh's Portfolio</p>
        </a>
      </div>
      <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
        {#each NavOptionsArr as NavOption, i}
        <a
        transition:blur={{duration: 300, delay:100}}
          class="px-2 py-1 block md:inline-block text-xl transition-all duration-200 font-[500] {pathName === NavOption.ref ? "text-primary ": "text-zinc-500"}"
          href={NavOption.ref}>{NavOption.label}</a
          >
        {/each}
        
        </div>
      <button class="" on:click={handleSeachBarButton}>
        <!-- for mobile devices -->
        {#if !showNavbarSmall}
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img src="\hamburger.svg" alt="hamburger" class="h- w-7 inline-block md:hidden" >
        {:else}
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img src="\cross.svg" alt="close" class="h-7 w-7 md:hidden">
        {/if}


        <!-- for Desktop devices -->
        {#if !showSearchComp}
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img src="\searchicon.svg" alt="search" class="h-6 hidden md:inline-block" in:blur={{duration: 300, delay:100}}>
        {:else}
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img src="\closeiconround.svg" alt="close" class="h-6 hidden md:inline-block" in:blur={{duration:300, delay:100}}>
        {/if}
          
      </button>
    </div>
    <div class="px-3 transition-all sm:hidden hidden {showSearchComp ? 'md:block' : 'md:hidden'}">
      <SearchComp toggle={()=> showSearchComp = !false}/>
    </div>

    <!-- Navbar for Mobile divices -->
    <div class="md:hidden h-svh flex justify-center items-center {showNavbarSmall ? 'block' : 'hidden'}">
        <div class="px-3 transition-all ">
            <div class="sm:flex sm:flex-col md:flex-row flex-wrap sm:justify-center md:gap-5">

              {#if $SearchQ == ""}
                {#each NavOptionsArr as NavOption, i}
                  <a
                  transition:blur={{duration: 300, delay:100}}
                    on:click={toggleNavBar}
                    class="px-2 py-1  block md:inline-block m-4 text-3xl transition-all duration-200  rounded-2xl {pathName === NavOption.ref ? "text-primary  transition-all": "text-[#342121b4]"}"
                    href={NavOption.ref}>{NavOption.label}</a
                  >
                {/each}
              {/if}
              </div>
            <SearchComp />
          </div>

    </div>
  </div>
</header>



<style>
   header {
    overflow: hidden; /* Ensures content doesn't overflow during height change */
  }
</style>