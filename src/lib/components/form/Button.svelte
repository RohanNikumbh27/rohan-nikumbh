<script>
    export let title = "Click here";
    export let href;
    export let target = "_self"
    let hovered = false;
    
</script>

<!-- <a href={href} class="{hovered?"bg-slate-500 drop-shadow-lg":"bg-slate-600"}  text-white transition-all duration-300 px-6 py-2 rounded-full" on:mouseenter={() => hovered = true} on:mouseleave={() => hovered = false}>
    <div class="h-10 w-5 absolute opacity-40 bg-white inline-block overflow-hidden blur-md rotate-45 hover:rotate-0 transition-all {hovered?"ml-5":"ml-20"}"></div>
    <p class="inline-block z-30 font-bold">{title}</p>
</a> -->
<a href={href} target={target} class=" cursor-pointer shadow-sm shadow-inner  smoothClick {hovered?"bg-zinc-900 drop-shadow-lg shadow-sm shadow-red-600":"bg-primary-dark shadow-black"}  text-white text-lg transition-all duration-300 px-6 py-3 rounded-full flex justify-center items-center mx-auto" on:mouseenter={() => hovered = true} on:mouseleave={() => hovered = false}>
    <div class="h-10 w-5 absolute opacity-50 bg-black z-[4] inline-block  overflow-hidden blur-md rotate-45 hover:rotate-0 transition-all {hovered?"ml-5":"ml-20"}"></div>
    <p class="inline-block z-[6] text-primary !font-medium font-sans pb-0.5 shimmer">{title}</p>

    <style>
        
@keyframes gradient-shuffle {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Apply styles for the text */
  .shimmer {
    font-weight: bolder; /* Make the text bold (optional) */
    background: linear-gradient(
      to right,
      #E50914, /* light green */
      #870000, /* medium green */
      #ff0000 /* dark green */
    );
    background-size: 200% 200%; /* Allow the gradient to shift */
    background-clip: text; /* Apply the gradient to the text only */
    -webkit-background-clip: text; /* Safari compatibility */
    color: transparent; /* Make the background visible within the text */
    animation: gradient-shuffle 3s ease-in-out infinite; /* Apply the animation */
  }
    </style>
</a>
