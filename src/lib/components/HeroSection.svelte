<script>
  import Rohan_image from "$lib/images/Rohan_Nikumbh.jpg";
  import Button from "$lib/components/form/Button.svelte";
  import { onMount } from "svelte";

  let scrollPosition = 0;

  onMount(() => {
    const handleScroll = () => {
      // Adjusting the scroll delay
      scrollPosition = window.scrollY * 0.2; // Lower value for smoother/slower movement
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<div class="h-10 hidden md:block"></div>

<!-- <div class="h-80 w-80 -left-0 -bottom-0 rounded-full !-z-[200] absolute blur-[200px] hover:blur-[200px] bg-red-500"></div> -->

<div class="min-h-[40%] flex flex-col gap-4 md:flex-row md:items-stretch">
  <!-- Rohan's Image -->
  <div class="mt-0 pt-0 sm:w-[100%] md:w-[40%] items-center justify-center flex h-full md:h-auto flex-col rounded-2xl">
    <img
      src={Rohan_image}
      alt="Img"
      class="rounded-2xl border-2 cursor-pointer hover:shadow-[0_35px_60px_-15px_rgba(255,0,0,0.5)] shadow-2xl shadow-[#00000074] border-red-600 transition-all hover:scale-105 h-[500px] mt-3 object-cover"
    />
  </div>

  <img
    src="/red_graphic.png"
    alt="Red Graphic"
    class="absolute left-0 top-[-50px] md:top-0 opacity-20 -z-[1000] transition-transform duration-1000 ease-in-out md:h-[1000px] sm:h-auto"
    style="transform: translateY({scrollPosition}px)"
  />


  <!-- Text Content -->
  <div class="items-center flex h-full md:h-auto flex-col justify-between rounded-2xl md:w-[60%]">
    <div class="font-[500] text-center text-3xl leading-relaxed text-zinc-700">
      Transforming Ideas into Seamless Experiences 🚀 - Currently Software Developer Intern @TimechainLabs
    </div>
    <p class="text-center text-xl leading-relaxed text-zinc-500">
      I am Rohan Nikumbh, your tech partner in website development, weaving
      together <span class="bluelink">Svelte, Sveltekit, Next.js, React.js</span>, and <span class="bluelink">MERN stack</span> proficiency for exceptional digital
      transformations of your project visions.
    </p>
    <div class="flex gap-2 text-sm font-[500] items-center w-full sm:w-full md:w-[70%] mt-5">
      <Button href="/contact" title="Work Together" />
      <Button href="/resume" title="Resume" />
    </div>
  </div>
</div>

<div class="max-w-[600px]"></div>
