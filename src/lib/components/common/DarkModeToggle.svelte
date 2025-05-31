<script>
    export let theme = "light";
    export let toggleTheme = () => {
        console.log("The theme is being toggled!")
    };
    import {onMount} from 'svelte';
    onMount(() => {
        // Check for saved user preference, if any, on initial load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            theme = savedTheme;
            document.documentElement.classList.toggle('dark', theme === 'dark');
        } else {
            // Default to light theme
            document.documentElement.classList.remove('dark');
        }
    });
</script>

<button class="ml-6 p-3 rounded-full transition-colors bg-zinc-200 dark:bg-zinc-700" on:click={toggleTheme} aria-label="Toggle theme">
            {#if theme === 'dark'}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2"/>
              <path d="M12 21v2"/>
              <path d="M4.22 4.22l1.42 1.42"/>
              <path d="M18.36 18.36l1.42 1.42"/>
              <path d="M1 12h2"/>
              <path d="M21 12h2"/>
              <path d="M4.22 19.78l1.42-1.42"/>
              <path d="M18.36 5.64l1.42-1.42"/>
            </svg>
            {:else}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            {/if}
</button>