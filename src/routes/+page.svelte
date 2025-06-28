<script>
  import GithubStats from "$lib/components/Home/GithubStats.svelte";
  import {routeAtaGlanceObjects} from "$lib/data/routeAtAGlance.js";
  import RouteAtAGlance from "../lib/components/Cards/RouteAtAGlance.svelte";
  import HeroSection from "$lib/components/Home/heroSection.svelte";
</script>

<div class="container md:pt-7">
  <HeroSection />
</div>

<GithubStats />

<div class="pt-10"></div>

<div class="flex flex-wrap justify-center gap-4">
  {#each routeAtaGlanceObjects as obj}
    <RouteAtAGlance {obj} />
  {/each}
</div>
<div class="pt-10"></div>

<style>
  .container {
    width: 80%;
  }
  .text-primary {
    color: black;
    font-weight: bold;
  }
</style>
