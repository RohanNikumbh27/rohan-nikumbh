<script>
    export const toggle = () => console.log("Toggle");
  import { SearchQ } from "$lib/store/userStore.js"
import {fade, fly} from "svelte/transition";

    // $:console.log(SearchQ)

    let results = [
        {label:"home", link:"/"},
        {label:"work", link:"/work"},
        {label:"timeline", link:"/timeline"},
        {label:"skills", link:"/skills"},
        {label:"contact", link:"/contact"},
        {label:"resume", link:"/resume"},
    ];

    // Filter the results based on the search query
    $: filteredResults = results.filter(result =>
        result.label.toLowerCase().includes($SearchQ.toLowerCase())
    );
</script>

<form on:submit|preventDefault={() => {}} >
    <div class="mx-auto my-8 relative bg-white dark:bg-gray-50 min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl">
        <input
            id="search-bar"
            placeholder="Search for something..."
            name="q"
            class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white text-black dark:bg-gray-50 dark:text-black"
            required
            bind:value={$SearchQ}
        />
        <button
            type="submit"
            class="w-full md:w-auto px-6 py-3 bg-black text-white border-black hover:bg-gray-800 active:scale-95 duration-100 rounded-xl transition-all"
        >
            <span class="flex items-center transition-all opacity-1">
                <span class="text-sm font-semibold whitespace-nowrap truncate text-white mx-auto">
                    Search
                </span>
            </span>
        </button>
    </div>

    <!-- Search Results Section -->
    {#if $SearchQ}
        <div class="text-black text-left font-[500] mb-5">
            Showing {filteredResults.length} result{filteredResults.length === 1 ? '' : 's'} for "{$SearchQ}"
        </div>
        <div class="bg-[#1414147e] w-full text-left rounded-2xl p-5 mb-10 shadow-lg max-h-[350px] overflow-auto">
            {#if filteredResults.length > 0}
                {#each filteredResults as result, i}
                <a href={result.link} class="px-1" on:click={toggle}>
                    <div class="flex gap-3 items-center  cursor-pointer hover:translate-x-1 transition-all">
                        <img src="/right-arrow.svg" alt="arrow" class="h-4 " />
                        <span class="text-md text-white">{result.label}</span>
                    </div>
                </a>
                {/each}
            {:else}
                <div class="text-gray-500 ">No results found</div>
            {/if}
        </div>
    {/if}
</form>
