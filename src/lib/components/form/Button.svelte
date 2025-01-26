<script>
    export let title = "Click here";
    export let href;
    let hovered = false;
</script>

<!-- <a href={href} class="{hovered?"bg-slate-500 drop-shadow-lg":"bg-slate-600"}  text-white transition-all duration-300 px-6 py-2 rounded-full" on:mouseenter={() => hovered = true} on:mouseleave={() => hovered = false}>
    <div class="h-10 w-5 absolute opacity-40 bg-white inline-block overflow-hidden blur-md rotate-45 hover:rotate-0 transition-all {hovered?"ml-5":"ml-20"}"></div>
    <p class="inline-block z-30 font-bold">{title}</p>
</a> -->
<a href={href} target="_self" class=" cursor-pointer hover:shadow-xl shadow-inner smoothClick {hovered?"bg-zinc-900 drop-shadow-lg":"bg-primary-dark"}  text-white text-lg transition-all duration-300 px-6 py-3 rounded-full flex justify-center items-center mx-auto" on:mouseenter={() => hovered = true} on:mouseleave={() => hovered = false}>
    <div class="h-10 w-5 absolute opacity-50 bg-black z-[4] inline-block  overflow-hidden blur-md rotate-45 hover:rotate-0 transition-all {hovered?"ml-5":"ml-20"}"></div>
    <p class="inline-block z-[6] text-primary font-semibold font-sans pb-0.5">{title}</p>
</a>
