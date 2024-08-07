<script>
  // Add any additional logic or state here if needed
  import SearchComp from "../lib/components/SearchComp.svelte";
  import Button from "$lib/components/form/Button.svelte";
  import HeroSection from "$lib/components/HeroSection.svelte";
  import Socials from "$lib/components/Home/Socials.svelte";
</script>


<div class="container ">
  <HeroSection />
  <Socials/>
</div>

<div class="container mx-auto p-4 bg-slate-300 rounded-2xl mt-20">
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
    </p>
    <!-- <a href="" class="bg-primary text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"></a> -->
    <Button title="View All Projects" href="/projects" />
  </section>

  <section class="text-center">
    <h2 class="text-3xl font-semibold text-primary mb-4">About Me</h2>
    <p class="text-lg text-gray-600 mb-4">
      I am dedicated to creating innovative and user-friendly applications. My
      expertise spans a range of technologies, and I’m always eager to learn and
      grow.
    </p>
    <!-- <a href="/about" class="bg-primary text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">Learn More About Me</a> -->
    <Button href="/about" title="Learn More About Me"></Button>
  </section>
</div>

<style>
  .container {
    max-width: 1200px;
  }
  .text-primary {
    color: black;
    font-weight: bold;
  }
</style>
