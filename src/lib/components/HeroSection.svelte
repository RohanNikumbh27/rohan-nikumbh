<script>
  import Button from "$lib/components/form/Button.svelte";
  import Loader from "$lib/components/Loader.svelte";
  import {onMount} from "svelte";
  import {quintOut} from "svelte/easing";
  import {fade,fly, blur} from "svelte/transition";

  let scrollPosition = 0;
  let currentIndex = 0;
  let images = [
    "/Rohan_Nikumbh.jpg",
    "/Rohan_Nikumbh1.jpg",
    "/Rohan_Nikumbh2.jpg",
  ];

  let showLoader = true;

  onMount(() => {
    // Show loader for 2 seconds before displaying the image
    setTimeout(() => {
      showLoader = false;
    }, 0);

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

<div class="h-[0px] sm:h-[0px] md:h-[40px] lg:h-[40px] xl:h-[40px] 2xl:h-[40px] "></div>

<div class="h-[40%] flex flex-col gap-4 md:flex-row ">
  <div class="min-h-[40%] flex flex-col gap-4 md:flex-row md:items-stretch justify-center">
    <div class="mt-0 pt-0 w-[100%] sm:w-[100%] md:w-[90%] lg:w-[70%] items-center flex h-full md:h-auto flex-col justify-between rounded-2xl  ">
      {#if showLoader}
        <Loader className="h-[500px] w-[330px] md:w-[370px] transition-all mx-10 rounded-2xl md:mt-10 sm:mt-2 " />
      {:else}
      <!-- in:fly="{{ y: 50, duration: 500, delay: 100, easing: quintOut }}" -->

      <img
        in:blur={{ duration: 1000, amount: 20 }}
        out:fade={{ duration: 3000 }}
        src="/Rohan_Nikumbh1.jpg"
        alt="Img"
        class="rounded-2xl cursor-pointer transform transition duration-300 ease-in-out hover:scale-[1.01] sm:hover:scale-[1.01] md:hover:scale-[1.1] hover:shadow-2xl h-[500px] md:mt-10 sm:mt-2 w-auto object-cover border-b-2  border-primary shadow-2xl shadow-primary-dark/80"
      />
      {/if}
    </div>
  </div>

  <!-- Text Content -->
  <div class="items-center flex h-full md:h-auto flex-col justify-evenly rounded-2xl md:w-[60%] py-10 sm:p-10 md:p-0 lg:p-0 xl:p-10 2xl:p-10">
    <div class="font-[500] text-center text-3xl leading-relaxed text-zinc-700 pb-2">
      Transforming Ideas into Seamless Experiences 🚀 - Currently <span class=" bg-gradient-to-r from-[#e50914] via-[#acacac] to-[#ff6f00] bg-[200%_auto] animate-gradient-move text-transparent bg-clip-text">Software Engineer </span> Intern 
      <p class="text-zinc-600">@Syngenta</p>
    </div>
    <p class="text-center text-xl leading-relaxed text-zinc-500 ">
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
