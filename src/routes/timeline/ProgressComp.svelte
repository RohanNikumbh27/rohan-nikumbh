<script>
import {quintOut} from "svelte/easing";
import {fade,fly} from "svelte/transition";

    export let pos = ""; // for position
    export let title = "";
    export let desc = "";
    export let date = "";

    let hovered = false;
</script>

<!-- Timeline item on the left side -->
{#if pos == "left"}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div class="flex md:contents flex-row-reverse" on:mouseenter={()=>hovered=true} on:mouseout={()=>hovered=false}>
        <div
            in:fly="{{ y: 50, duration: 500, delay:  100, easing: quintOut }}"
            out:fade="{{ duration: 300 }}"
            class="relative  p-7 my-6 text-zinc-300 bg-rad-dark rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto shadow-2xl hover:shadow-primary transform transition duration-300 ease-in-out hover:scale-[1.01] sm:hover:scale-[1.01] md:hover:scale-[1.1] hover:shadow-2xl">
            <span class=" text-sm text-zinc-300  whitespace-nowrap">{date}</span>
            <h3 class="text-lg font-semibold lg:text-xl">{title}</h3>
            <p class="mt-2 leading-6 text-zinc-400">{desc}</p>
        </div>
        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <!-- line -->
            <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-zinc-500 rounded-t-full"></div>
            </div>
            <!-- circle round -->
            <div class="transition-all absolute w-6 h-6 -mt-3 bg-white  dark:bg-zinc-700 border-4 border-primary rounded-full top-1/2"></div>
        </div>
    </div>
{/if}

<!-- Timeline item on the right side -->
{#if pos == "right"}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div class="flex md:contents transition-c"
      on:mouseenter={()=>hovered=true} on:mouseout={()=>hovered=false}
    >
        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto ">
            <!-- line -->
            <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-zinc-500"></div>
            </div>
            <!-- cicle round -->
            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 dark:bg-zinc-700 border-primary rounded-full top-1/2"></div>
        </div>
        <div class="relative p-7 my-6 text-zinc-300 bg-rad-dark rounded-xl col-start-6 col-end-10 mr-auto hover:shadow-primary transform transition duration-300 ease-in-out hover:scale-[1.01] sm:hover:scale-[1.01] md:hover:scale-[1.1] hover:shadow-2xl">
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
    .bg-rad-dark {
        background: radial-gradient(circle, #111, #000000);
    }
</style>