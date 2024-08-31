<script>
  // Add any additional logic or state here if needed
  import SearchComp from "../lib/components/SearchComp.svelte";
  import Button from "$lib/components/form/Button.svelte";
  import HeroSection from "$lib/components/HeroSection.svelte";
  import Socials from "$lib/components/Home/Socials.svelte";
</script>


<div class="container ">
  <HeroSection />
</div>
<div class="mb-4">
  <Socials/>
</div>

<!-- <div class="container mx-auto p-4 bg-slate-300 rounded-2xl mt-20">
  <header class="text-center mb-8 text-black rounded-2xl m-4 bg-slate-400">
    <h1 class="text-4xl font-bold text-black mb-4">Welcome to My Portfolio</h1>
    <p class="text-lg text-gray-700">
      I'm a passionate developer with experience in modern web technologies.
      Explore my work and projects below.
    </p>
  </header>

  <section class="text-center mb-12">
    <h2 class="text-3xl font-semibold text-primary mb-4">Featured Projects</h2>
    <p class="text-lg text-gray-600 mb-4">
      Here are some of the projects I've been working on recently. Click on any
      project to learn more about it.
    </p>-->

<style>
  .container {
    width: 80%;
  }
  .text-primary {
    color: black;
    font-weight: bold;
  }
</style>
