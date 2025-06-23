<script>
 import {perspectiveTilt} from '$lib/utils.js';
 import {blur} from 'svelte/transition';
</script>

<div
  use:perspectiveTilt
  class='transition-all ease-out duration-1000 md:mt-5 delay-75'
  style="display: inline-block;"
>
  <img
    transition:blur={{ duration:1000, amount: 20 }}
    src='/Rohan_Nikumbh.jpg'
    style="will-change: transform, opacity;"
    alt="Rohan Nikumbh"
    loading="lazy"
    class="rounded-2xl h-[500px] md:!h-[450px] !w-[330px] !md:w-[370px] min-w-[340px] object-cover border-b-2 border-primary"
  />
</div>
