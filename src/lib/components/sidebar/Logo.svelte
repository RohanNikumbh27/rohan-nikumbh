<script>
import {blur} from "svelte/transition";

    export let currentText = "Rohan Nikumbh";
    export let show = true;
</script>

<div class="flex justify-center items-center flex-row text-xl text-zinc-700 font-semibold {currentText == 'Portfolio' && 'pr-[68px]'}">
{#if show}
    <span
    class="!font-sans bg-gradient-to-r from-zinc-400 via-[#3b3b3b] to-zinc-400 bg-[200%_auto] animate-gradient-move text-transparent bg-clip-text"
    in:blur={{ duration: 500 }}
    out:blur={{ duration: 500 }}
    >
    {currentText}
    <!-- <img
        src="/sparcle.svg"
        alt="sparcle"
        class="text-primary h-6 w-6 pl-0.5 pb-0.5 transition-all duration-300 inline-block"
    /> -->
    <span class="!h-[4px] !w-[4px] bg-primary inline-block rounded-full relative -left-[2px]"></span>
    </span>
{/if}
</div>
<p class="sr-only">Rohan Nikumbh's Portfolio</p>