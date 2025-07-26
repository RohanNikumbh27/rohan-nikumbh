<script>
  export let title = "Click here";
  export let href;
  export let target = "_self";
  let hovered = false;
</script>

<a
  {href}
  {target}
  class="relative !cursor-pointer transition-all duration-300 px-[20px] py-3 rounded-full flex justify-center items-center mx-auto overflow-hidden group
   text-lg bg-zinc-900 dark:bg-white font-semibold border-[4px] border-transparent"
  on:mouseenter={() => (hovered = true)}
  on:mouseleave={() => (hovered = false)}
>
  <!-- Shine effect -->
  <!-- <span
    class="absolute left-0 top-0 h-full w-1/3 bg-black blur-lg pointer-events-none transition-all duration-700"
    style="transform: translateX(-120%) rotate(20deg);"
    class:shine-animate={hovered}
  ></span> -->

  <!-- Button text with shimmer -->
  <span class="relative z-10 shimmer-text text-center font-thin">{title}</span>
</a>

<style>
  a:hover{
    box-shadow:
      0 6px 32px 0 #e5091877,
      0 1.5px 8px 0 #0008;
    border: 1px dotted #e50918;
  }
  a{
    box-shadow:
      0 6px 32px 0 #717171,
      0 1.5px 8px 0 #0008;
    border: 1px dashed #636363;
  }
</style>
