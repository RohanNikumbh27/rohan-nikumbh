<script>
    import {page} from "$app/stores";
    import SearchComp from "./SearchComp.svelte";
    import { SearchQ } from "$lib/store/userStore.js"
  import {blur, fade, fly, scale} from "svelte/transition";
  
  

     
  
  
    let NavOptionsArr = [
                    {
                      label: "Home",
                      ref: "/"
                    },
                    // {
                    //   label: "Work",
                    //   ref: "/work"
                    // },
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
    const toggleShowSearchComp = (e) => {
      pathName = $page.url.pathname;
      showSearchComp = !showSearchComp;
    };
    const toggleNavBar = (e) => {
      showNavbarSmall = !showNavbarSmall;
    };
    
    const handleSeachBarButton = () => {
      toggleShowSearchComp();

    }

    $:pathName = $page.url.pathname;


  </script>

  <!-- for desktop devices -->
  <header
    class="fixed hidden md:inline-block inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md  bg-[#221f1f2f] py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg transition-all duration-500 "
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
                href={NavOption.ref}>{NavOption.label}
            </a>
          {/each}
          </div>
        <button class="" on:click={handleSeachBarButton}>
  
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
    </div>
  </header>


  <!-- for mobile devices -->


<div class="block md:hidden">
  <header class="h-auto fixed top-0 w-full block z-[40] rounded-3xl p-2 bg-transparent ">
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="h-[60px] rounded-3xl bg-primary-dark bg-opacity-85 backdrop-blur-[10px] flex items-center px-5 justify-between">
        <img src="\sparcle.svg" alt="sparcle" class=" text-primary  h-6 w-6">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img src="\hamburger.svg" alt="hamburger" class=" cursor-pointer w-7 inline-block md:hidden" on:click={()=>showNavbarSmall = !showNavbarSmall}>
    </div>
  </header>
</div>

  {#if showNavbarSmall}
  <div class=" fixed h-[100vh] block w-[100vw] bg-primary-dark text-primary  !z-[500] p-2" in:fly={{duration:300, x:"-400%"}} out:fly={{duration:2000, x:"-400%", delay:200}} ></div>
  <div class=" fixed h-[100vh] block w-[94vw] bg-primary text-primary  !z-[600] p-2" in:fly={{duration:800, x:"-400%"}} out:fly={{duration:1700, x:"-450%", delay:45}}></div>
  <div class=" fixed h-[100vh] block w-[88vw] bg-white shadow-2xl shadow-zinc-700 text-primary  !z-[700] p-2 mr-10" in:fly={{duration:800, x:"-400%", delay:200}} out:fly={{duration:1000, x:"-400%"}}>
    <div class="h-[70px] rounded-3xl  bg-opacity-85 backdrop-blur-2xl flex items-center px-5 justify-between" >
        <img src="\rohan-portfolio.svg" alt="sparcle" class=" text-primary pt-7">
        <button on:click={()=>showNavbarSmall = !showNavbarSmall}>
            <img src="\cross.svg" alt="hamburger" class="h- w-7 inline-block md:hidden">
        </button>
    </div>

    <div class="h-full my-auto pt-20">
        {#each NavOptionsArr as NavOption, i}
          <a
            transition:blur={{duration: 300, delay:100}}
            on:click={toggleNavBar}
            class="px-2 py-1  block md:inline-block m-4 text-3xl transition-all duration-200 rounded-2xl {pathName === NavOption.ref ? "!text-primary": "text-[#342121b4]"}"
            href={NavOption.ref}>{NavOption.label}
          </a>
        {/each}
    </div>
  </div>
{/if}

