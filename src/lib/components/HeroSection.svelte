<script>
  import Button from "$lib/components/form/Button.svelte";
  import Loader from "$lib/components/Loader.svelte";
  import HeroImage from "$lib/components/Home/HeroImage.svelte";
  import {onMount} from "svelte";


  let scrollPosition = 0;
  let currentIndex = 0;
  let images = [
    "/Rohan_Nikumbh.jpg",
    "/Rohan_Nikumbh1.jpg",
    "/Rohan_Nikumbh2.jpg",
    "/Rohan_Kailas_Nikumbh.jpg"
  ];

  let showLoader = true;

  onMount(() => {
    // Show loader for 2 seconds before displaying the image
    setTimeout(() => {
      showLoader = false;
    }, 900);

    const handleScroll = () => {
      scrollPosition = window.scrollY * 0.2;
    };

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
    }, 3000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<div class="h-[20px] sm:h-[20px] md:h-[40px] lg:h-[30px] xl:h-[40px] 2xl:h-[40px] "></div>

<div class="h-[40%] flex flex-col gap-12 lg:flex-row xl:gap-0">
  <div class="min-h-[40%] flex flex-col md:flex-row md:items-stretch justify-center xl:min-w-[493px]">
    <div class=" justify-center mt-0 w-[100%] sm:w-[100%] md:w-[370px] lg:w-[70%] items-center flex h-full md:h-auto flex-col rounded-2xl relative ">
      {#if showLoader}
        <Loader className="h-[500px] w-[330px] md:w-[370px] min-w-[340px] transition-all rounded-2xl md:mt-6" />
      {:else}
        <HeroImage/>
      {/if}
    </div>
  </div>

  <!-- Text Content -->
  <div class="items-center flex h-full  md:h-auto md:justify-center flex-col xl:justify-evenly rounded-2xl md:w-[85%] xl:w-[70%] md:mx-auto pr-0 lg:pr-0 2xl:pr-[74px]">
    <div class="font-[500] text-center text-3xl leading-relaxed text-zinc-700 dark:text-white pb-2">
      Transforming Ideas into Seamless Experiences 🚀 - Currently <span class=" bg-gradient-to-r from-[#e50914] via-[#acacac] to-[#ff6f00] bg-[200%_auto] animate-gradient-move text-transparent bg-clip-text">Software Engineer </span> Intern 
      <p class="text-zinc-600 dark:text-[#fff]">@Syngenta</p>
    </div>
    <p class="text-center text-xl leading-relaxed text-zinc-500 dark:text-zinc-400">
      I am Rohan Nikumbh, your tech partner in website development, weaving
      together <span class="bluelink">Comprehensive Development</span> and proficiency for exceptional digital
      transformations of your project visions.
    </p>
    <div class="flex gap-2 text-sm font-[500] items-center w-full lg:w-[70%] mt-5 ">
      <Button href="/contact" title={`Work Together`} />
      <Button href="/resume" title="Resume" />
    </div>
  </div>
</div>

<div class="h-[0px] sm:h-[0px] md:h-[40px] lg:h-[40px] xl:h-[40px] 2xl:h-[40px] "></div>
