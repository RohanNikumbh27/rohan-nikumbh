<script>
  export let theme = "light";
  export let toggleTheme = () => {
    console.log("The theme is being toggled!");
  };
  import { onMount } from "svelte";
  onMount(() => {
    // Check for saved user preference, if any, on initial load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      theme = savedTheme;
      document.documentElement.classList.toggle("dark", theme === "dark");
    } else {
      // Default to light theme
      document.documentElement.classList.remove("dark");
    }
  });
</script>

<button
  class="ml-3.5 md:ml-5 rounded-xl md:bg-stone-100 md:dark:bg-[#ffffff1f] h-14 w-14 p-1.5 md:h-12 md:w-12"
  on:click={toggleTheme}
  aria-label="Toggle theme"
>
  <img
    src="\dark-theme.svg"
    alt="Toggle dark mode"
    class=" rounded-full block dark:invert"
  />
</button>
