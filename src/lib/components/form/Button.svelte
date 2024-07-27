<script>
    export let title;
    export let href;
    let hovered = false;
</script>

<!-- <a href={href} class="{hovered?"bg-slate-500 drop-shadow-lg":"bg-slate-600"}  text-white transition-all duration-300 px-6 py-2 rounded-full" on:mouseenter={() => hovered = true} on:mouseleave={() => hovered = false}>
    <div class="h-10 w-5 absolute opacity-40 bg-white inline-block overflow-hidden blur-md rotate-45 hover:rotate-0 transition-all {hovered?"ml-5":"ml-20"}"></div>
    <p class="inline-block z-30 font-bold">{title}</p>
</a> -->
<a href={href} class="{hovered?"bg-zinc-900 drop-shadow-lg":"bg-zinc-950"}  text-white transition-all duration-300 px-6 py-2 rounded-full" on:mouseenter={() => hovered = true} on:mouseleave={() => hovered = false}>
    <div class="h-10 w-5 absolute opacity-50 bg-white inline-block overflow-hidden blur-md rotate-45 hover:rotate-0 transition-all {hovered?"ml-5":"ml-20"}"></div>
    <p class="inline-block z-30 font-bold">{title}</p>
</a>
