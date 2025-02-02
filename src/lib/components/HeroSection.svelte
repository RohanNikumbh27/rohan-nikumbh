<script>
  import Button from "$lib/components/form/Button.svelte";
  import { onMount } from "svelte";
import {quintOut} from "svelte/easing";
import {fade, fly} from "svelte/transition";

  let scrollPosition = 0;
  let currentIndex = 0;
  let images = [
    "/Rohan_Nikumbh.jpg",
    "/Rohan_Nikumbh1.jpg",
    "/Rohan_Nikumbh2.jpg",
  ];

  const nextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
  };

  const prevImage = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  };

  onMount(() => {
    const handleScroll = () => {
      // Adjusting the scroll delay
      scrollPosition = window.scrollY * 0.2; // Lower value for smoother/slower movement
    };

    // Auto-slide every 3 seconds
    const interval = setInterval(nextImage, 3000);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval); // Clear interval on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  });
  
</script>

<div class="h-[0px] sm:h-[0px] md:h-[40px] lg:h-[40px] xl:h-[40px] 2xl:h-[40px] "></div>

<div class="h-[40%] flex flex-col gap-4 md:flex-row ">
 
  <div class="min-h-[40%] flex flex-col gap-4 md:flex-row md:items-stretch justify-center">
    <div class="mt-0 pt-0 w-[100%] sm:w-[100%] md:w-[90%] lg:w-[70%] items-center flex h-full md:h-auto flex-col justify-between rounded-2xl">
      <img
        in:fly="{{ y: 50, duration: 500, delay: 100, easing: quintOut }}"
        out:fade="{{ duration: 300 }}"
        src="/Rohan_Nikumbh1.jpg"
        alt="Img"
        class="rounded-2xl border-0 cursor-pointer transform transition duration-300 ease-in-out hover:scale-[1.01] sm:hover:scale-[1.01] md:hover:scale-[1.1] hover:shadow-2xl h-[500px] mt-3 w-auto object-cover"
      />
    </div>
  </div>

  <!-- Image Carousel -->
  <!-- <div class="mt-0  transition-all pt-0 sm:w-[100%] md:w-[40%] flex items-center justify-center h-full md:h-auto flex-col rounded-2xl relative">
    {#each images as image, i}
      <img
        src={image}
        alt="Img"
        class="absolute !transition-all rounded-2xl border-2 cursor-pointer hover:shadow-[0_35px_60px_-15px_rgba(255,0,0,0.5)] shadow-2xl  shadow-[#00000074] border-gray-600  duration-500 transform object-cover h-[500px] w-[300px]"
        class:hidden={i !== currentIndex}
        in:fade
        out:fade
      />
    {/each}

    <button
      on:click={prevImage}
      class="absolute  left-4 text-white bg-black/50 rounded-full px-2 py-2 backdrop-blur-sm hover:bg-black transition-all"
    >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
    </svg>
        
    
    </button>
    <button
      on:click={nextImage}
      class="absolute right-4 text-white bg-black/50 rounded-full px-2 py-2 backdrop-blur-sm hover:bg-black transition-all"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
      </svg>
    </button>


    <div class="flex justify-center mt-[430px]  absolute bg-[#ffffff2c] backdrop-blur-md px-2 py-2 rounded-2xl">
      {#each images as _, i}
        <span
          class="w-3 h-3 mx-1 rounded-full cursor-pointer transition-all"
          class:bg-primary={i === currentIndex}
          class:bg-primary-dark={i !== currentIndex}
          on:click={() => (currentIndex = i)}
        ></span>
      {/each}
    </div>
  </div> -->

  <!-- <img
    src="/red_graphic.png"
    alt="Red Graphic"
    class="absolute left-0 sm:left-0 md:left-5 top-[-70px] md:top-0 opacity-100 -z-[1000] transition-all duration-1000 ease-in-out md:h-[1000px] sm:h-[100vh] "
    style="
      transform: translateY({scrollPosition}px);
      filter: hue-rotate(70deg) saturate(5%);
    "
  /> -->



  <!-- Text Content -->
  <div class="items-center flex h-full md:h-auto flex-col justify-evenly rounded-2xl md:w-[60%] py-10 sm:p-10 md:p-0 lg:p-0 xl:p-10 2xl:p-10">
    <div class="font-[500] text-center text-3xl leading-relaxed text-zinc-700">
      Transforming Ideas into Seamless Experiences 🚀 - Currently Software Engineer Intern 
<p class="gradient-text">@Syngenta</p>
    </div>
    <p class="text-center text-xl leading-relaxed text-zinc-500">
      I am Rohan Nikumbh, your tech partner in website development, weaving
      together <span class="bluelink">Svelte, Sveltekit, Next.js, React.js</span>, and <span class="bluelink">MERN stack</span> proficiency for exceptional digital
      transformations of your project visions.
    </p>
    <div class="flex gap-2 text-sm font-[500] items-center w-full sm:w-full md:w-[70%] mt-5 ">
      <Button href="/contact" title="Work Together" />
      <Button href="/resume" title="Resume" />
    </div>
  </div>
</div>

<div class="h-[0px] sm:h-[0px] md:h-[40px] lg:h-[40px] xl:h-[40px] 2xl:h-[40px] "></div>

<!-- <div class="max-w-[600px]"></div> -->
