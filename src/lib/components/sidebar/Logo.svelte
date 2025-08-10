<script>
import { blur } from "svelte/transition";

    export let currentText = "Rohan Nikumbh";
    export let show = true;
</script>

<!-- Reduced to a single span and move decorative dot to ::after -->
<span class="logoText flex items-center text-xl text-zinc-700 font-semibold {currentText == 'Portfolio' && 'pr-[68px]'}">
{#if show}
    <span
    class="!font-sans bg-gradient-to-r from-zinc-400 via-[#3b3b3b] to-zinc-400 dark:from-zinc-100 dark:via-zinc-600 dark:to-zinc-100 bg-[200%_auto] animate-gradient-move text-transparent bg-clip-text"
    in:blur={{ duration: 500 }}
    out:blur={{ duration: 500 }}
    >
    {currentText}
    </span>
{/if}
</span>

<style>
  /* Decorative 4px dot moved to CSS to remove an extra DOM node */
  .logoText > span::after {
    content: "";
    display: inline-block;
    width: 4px;
    height: 4px;
    margin-left: 2px;
    border-radius: 50px;
    background-color: #E50914; /* primary */
    position: relative;
  }
</style>

<p class="sr-only">Rohan Nikumbh's Portfolio</p>