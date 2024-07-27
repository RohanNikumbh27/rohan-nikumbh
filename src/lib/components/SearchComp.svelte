<script>
    let SearchQ = ""
    $:console.log("SearchQ", SearchQ)
</script>

<form>
    <div class="mx-auto my-8 relative bg-white dark:bg-gray-50 min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300">
        <input id="search-bar" placeholder="keyword" name="q" class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white text-black dark:bg-gray-50" required="" bind:value={SearchQ}>
        <button type="submit" class="w-full md:w-auto px-6 py-3 bg-black border-black text-black fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all">
            <span class="flex items-center transition-all opacity-1">
                <span class="text-sm font-semibold whitespace-nowrap truncate text-white mx-auto">
                    Search
                </span>
            </span>
        </button>
    </div>
</form>