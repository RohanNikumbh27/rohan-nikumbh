<script>
  import HeroSection from "$lib/components/HeroSection.svelte";
  import GithubStats from "$lib/components/Home/GithubStats.svelte";
</script>

<!-- <div class="w-[50vw] h-[30vh] fixed dark:bg-zinc-500/30 bg-zinc-500/20 left-[2vw] top-[20vh] blur-3xl "></div> -->

<div class="container md:pt-7">
  <HeroSection />
</div>
    
<GithubStats/>

<style>
  .container {
    width: 80%;
  }
  .text-primary {
    color: black;
    font-weight: bold;
  }
</style>
