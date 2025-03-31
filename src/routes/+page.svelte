<script>
  import SearchComp from "../lib/components/SearchComp.svelte";
  import Button from "$lib/components/form/Button.svelte";
  import HeroSection from "$lib/components/HeroSection.svelte";
  import Socials from "$lib/components/Home/Socials.svelte";
  import { GitPullRequestArrow, AlertCircle, FilePlus2, GitFork, GitCommitHorizontal, Github, BookLock, BookDown } from 'lucide-svelte';

  export let prCount = 80;
  export let issuesCount = 21;
  export let forkCount = 8;
</script>

<div class="container">
  <HeroSection />
</div>
    
<div class="flex items-center justify-center pb-4">
  <Github class="w-6 h-6 text-[#204dff] mr-3" />
  <span class="text-zinc-900 text-3xl">Github Stats <span class="text-sm text-zinc-500">(31/01/2025)</span></span>
</div>

<section class="m-[10px]">
  <div  class="md:mb-10 bg-zinc-900 shadow-lg px-6 py-8 max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto my-2 rounded-xl">
    <div class="space-y-4">
      <div class="flex gap-5 flex-col sm:flex-col md:flex-row justify-between">
        <div class="flex items-center w-full xl:px-5 "> 
          <BookDown class="w-6 h-6 text-primary mr-3" />
          <span class="text-gray-300">Public Repos count:</span>
          <span class="ml-auto font-semibold !text-primary">33+</span>
        </div>

        <div class="flex items-center w-full xl:px-5 ">
          <BookLock class="w-6 h-6 text-primary mr-3" />
          <span class="text-gray-300">Private Repos count:</span>
          <span class="ml-auto font-semibold !text-primary">6+</span>
        </div>
      </div>

      <div class="flex gap-4 flex-col sm:flex-col md:flex-row justify-between">
        <div class="flex items-center w-full xl:px-5 ">
          <GitPullRequestArrow class="w-6 h-6 text-primary mr-3" />
          <span class="text-gray-300">PR count:</span>
          <span class="ml-auto font-semibold !text-primary">209+</span>
        </div>

        <div class="flex items-center w-full xl:px-5 ">
          <GitCommitHorizontal class="w-6 h-6 text-primary mr-3" />
          <span class="text-gray-300">Total contributions:</span>
          <span class="ml-auto font-semibold !text-primary">1729+</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .container {
    width: 80%;
  }
  .text-primary {
    color: black;
    font-weight: bold;
  }
</style>
