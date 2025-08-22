<script>
  import Button from "$lib/components/form/Button.svelte";
  import Loader from "$lib/components/Loader.svelte";
  import { perspectiveTilt } from "$lib/utils.js";
  import { onMount } from "svelte";
  import { blur } from "svelte/transition";

  let innerHeight = 0;
  let showLoader = true;

  onMount(() => {
    innerHeight = window.innerHeight;
    // setTimeout(() => {
      showLoader = false;
    // }, 10);
  });
</script>

<svelte:head>
  <!-- Preload AVIF (next‑gen) instead of JPEG -->
  <link
    rel="preload"
    as="image"
    href="/Rohan_Nikumbh.avif"
    imagesizes="(min-width: 768px) 340px, 90vw"
    fetchpriority="high"
  />
</svelte:head>

<div
  class="h-[20px] sm:h-[20px] md:h-[40px] lg:h-[30px] xl:h-[40px] 2xl:h-[40px]"
>
</div>

<div class="h-[40%] flex flex-col gap-12 lg:flex-row xl:gap-0  max-w-[1200px]  mx-auto">
  <div
    class="min-h-[40%] flex flex-col md:flex-row md:items-stretch justify-center xl:min-w-[493px]"
  >
    <div
      class=" justify-center mt-0 w-[100%] sm:w-[100%] md:w-[370px] lg:w-[70%] items-center flex h-full md:h-auto flex-col rounded-2xl relative"
    >
    <div class='md:h-[455px] w-[90vw] h-[120.7vw] xs:h-[460px] xs:w-[350px] md:w-[340px] md:min-w-[300px]'>
      {#if showLoader}
        <Loader
          className=" md:h-[455px] w-[90vw] h-[120.7vw] xs:h-[460px] xs:w-[350px] md:w-[340px] md:min-w-[300px] transition-all rounded-2xl md:mt-6"
        />
      {:else}
        <div
          use:perspectiveTilt
          class="transition-all ease-out duration-1000 md:mt-5 delay-75"
          style="display: inline-block;"
        >
          <picture>
            <source
              type="image/avif"
              srcset="/Rohan_Nikumbh.avif"
              sizes="(min-width: 768px) 340px, 90vw"
            />
            <source
              type="image/webp"
              srcset="/Rohan_Nikumbh.webp"
              sizes="(min-width: 768px) 340px, 90vw"
            />
            <img
              src="/Rohan_Nikumbh.jpg"  
              alt="Rohan Nikumbh"
              width="340"
              height="460"
              decoding="async"
              loading="eager"
              fetchpriority="high"
              transition:blur={{ duration: 200, amount: 20 }}
              style="will-change: transform, opacity;"
              class="rounded-2xl object-cover border-b-2 border-primary hero-image opacity-95 hover:opacity-100 transition-all"
            />
          </picture>
        </div>
      {/if}
    </div>
    </div>
  </div>

  <div
    class="items-center flex h-full md:h-auto flex-col justify-evenly rounded-2xl md:w-[85%] xl:w-[70%] md:mx-auto pr-0 xl:pr-[74px] transition-c relative -bottom-4"
  >
    <div
      class="hero-heading font-bold text-center text-3xl leading-relaxed text-zinc-900 dark:text-white pb-2"
    >
      Transforming Ideas into Seamless Experiences 🚀 - Aspiring <span
        class=" bg-gradient-to-r from-[#e50914] via-[#acacac] to-[#ff6f00] bg-[200%_auto] animate-gradient-move text-transparent bg-clip-text"
        >Software Engineer
      </span>
      {#if innerHeight > '1024px'}
      <br>
      {/if}
    </div>
    <p
      class="hero-subheading font-bold text-center text-xl leading-relaxed  text-stone-600 dark:text-zinc-400 font-[350] rounded-lg"
    >
      I am Rohan Nikumbh, your tech partner in Software development, weaving
      together <span class="bluelink hover:underline">Comprehensive Development</span> and proficiency
      for exceptional digital transformations of your project visions.
    </p>
    <div
      class="flex gap-2 text-sm font-[500] items-center w-full lg:w-[70%] mt-5"
    >
      <Button href="/contact" title={`Work Together`} />
      <Button href="/resume-and-certifications" title="Resume" />
    </div>
  </div>
</div>

<div
  class="h-[0px] sm:h-[0px] md:h-[40px] lg:h-[40px] xl:h-[40px] 2xl:h-[40px]"
></div>
