<script>
import {quintOut} from "svelte/easing";
import {fade, fly} from "svelte/transition";

    export let pos = ""; //for position
    export let title = "";
    export let desc = "";
    export let date = "";


    let hovered = false
    

</script>

{#if pos == "left"}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div class="flex md:contents flex-row-reverse  " on:mouseenter={()=>hovered=true} on:mouseout={()=>hovered=false}>
        <div
            in:fly="{{ y: 50, duration: 500, delay:  100, easing: quintOut }}"
            out:fade="{{ duration: 300 }}"
            class="relative  p-7 my-6 text-zinc-300 bg-rad rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto shadow-2xl hover:shadow-primary transform transition duration-300 ease-in-out hover:scale-[1.01] sm:hover:scale-[1.01] md:hover:scale-[1.1] hover:shadow-2xl">
            <span class=" text-sm text-zinc-300  whitespace-nowrap">{date}</span>
            <h3 class="text-lg font-semibold lg:text-xl">{title}</h3>
            <p class="mt-2 leading-6 text-zinc-400">{desc}</p>
        </div>
        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-zinc-300 rounded-t-full ">
                </div>
            </div>
            <!-- {#if hovered}
              <div class="relative flex items-center h-12 z-10 -top-[64%] mb-10 rotate-180 transition-all">
                <div class="w-6 h-6 bg-zinc-900 border-t-4 border-s-4 border-b-4 border-zinc-900 rounded-full"></div>
                <div class="flex-1 h-4 bg-zinc-900 border-t-4 border-b-4 border-zinc-900 rounded-l-full relative">
                  <div class="absolute w-4 h-4  top-[51.9%] -right-[2px]  translate-y-[-50%] rotate-[-52deg] skew-y-[14deg]	transform: skewY(12deg); bg-zinc-900"></div>
                </div>
              </div>
            {:else} -->
              <div class=" transition-all absolute w-6 h-6 -mt-3 bg-white border-4 border-primary rounded-full top-1/2"></div>
            <!-- {/if} -->
              </div>
    </div>
{/if}


{#if pos == "right"}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div class="flex md:contents transition-c"
    on:mouseenter={()=>hovered=true} on:mouseout={()=>hovered=false}
    >
        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto ">
            <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-zinc-300"></div>
            </div>
            <!-- {#if hovered}
              <div class="relative flex items-center h-12 z-10 -top-[64%] mb-10">
                <div class="w-6 h-6 bg-zinc-900 border-t-4 border-s-4 border-b-4 border-zinc-900 rounded-full"></div>
                <div class="flex-1 h-4 bg-zinc-900 border-t-4 border-b-4 border-zinc-900 rounded-l-full relative">
                  <div class="absolute w-4 h-4  top-[51.9%] -right-[2px]  translate-y-[-50%] rotate-[-52deg] skew-y-[14deg]	transform: skewY(12deg); bg-zinc-900"></div>
                </div>
              </div>
            {:else} -->
              <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-primary rounded-full top-1/2"></div>
            <!-- {/if} -->
        </div>
        <div class="relative p-7 my-6 text-zinc-300 bg-rad rounded-xl col-start-6 col-end-10 mr-auto hover:shadow-primary transform transition duration-300 ease-in-out hover:scale-[1.01] sm:hover:scale-[1.01] md:hover:scale-[1.1] hover:shadow-2xl">
            <span class=" text-sm text-zinc-300  whitespace-nowrap ">{date}</span>
            <h3 class="text-lg font-semibold lg:text-xl">{title}</h3>
            <p class="mt-2 leading-6 text-zinc-400">{desc}</p>
        </div>
    </div>

{/if}




<style>
    .bg-rad {
        background: radial-gradient(circle, #222, #111);
    }
</style>