<script>
    export let obj = {
        title: "Rohan Nikumbh",
        description: "Software Engineer | Tech Enthusiast",
        LinkText: "Explore",
        linkRoute: "www.rohannikumbh.me"
    };
    import { MoveRight } from "lucide-svelte";
    import { slide } from "svelte/transition";
</script>

<div class="flex items-center justify-center">
<div class="relative m-4 p-6 rounded-2xl bg-white-100/70 dark:bg-neutral-900/70 border-[1px] dark:border-none transition-all duration-300 max-w-[500px] flex flex-col items-center text-center max-h-[370px]">
    <!-- Decorative Bar -->
    <div class="flex items-center justify-center gap-2 mb-5">
        <div class="h-1 w-1/2 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full animate-pulse"></div>
        <div class="h-1 w-3 bg-primary rounded-full"></div>
        <div class="h-1 w-1/2 bg-gradient-to-l from-primary/40 via-primary to-primary/40 rounded-full animate-pulse"></div>
    </div>
    <!-- Content -->
<div class="flex flex-col items-center text-center">

    </div>
    <!-- Icon -->
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-gray-100 tracking-tight mb-2 flex items-center justify-center gap-2">{obj.title}</h2>
    <p class="text-gray-500 dark:text-gray-400 text-base mb-6">{obj.description}</p>

    <!-- Link Button -->
    <a
        href={obj.linkRoute}
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-primary border border-primary bg-primary/10 hover:bg-primary/20 transition duration-300 font-medium group"
    >
        <span class="font-mono pb-[1px]">{obj.LinkText}</span>
        <span 
            transition:slide={{ x: -12, duration: 300 }}
            class="transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
        >
            <MoveRight />
        </span>
    </a>
</div>
</div>
