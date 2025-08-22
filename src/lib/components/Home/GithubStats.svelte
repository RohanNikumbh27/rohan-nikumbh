<script>
  import {
    AlertCircle,
    BookDown,
    BookLock,
    FilePlus2,
    GitCommitHorizontal,
    GitFork,
    Github,
    GitPullRequestArrow,
    Info
  } from "lucide-svelte";

  const statsData = {
    publicRepos: "41+",
    privateRepos: "11+",
    prCount: "270+",
    totalContributions: "1832+",
  };
</script>

<div class="flex items-center justify-center pt-10 md:pt-0">
  <Github class="w-6 h-6 text-[#204dff] mr-3" />
  <span class=" text-zinc-900 text-3xl dark:text-zinc-100"
    >Github Stats <span class="text-xs text-zinc-500">(29/06/2025)</span></span
  >
</div>

<section class="m-[15px]">
  <div
    class="md:mb-10 text-white  max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto my-2 "
  >
    <div class="space-y-4 bg-black dark:bg-[#1F1F1F] dark:backdrop-blur-md px-6 py-8 rounded-xl">
      <div class="flex gap-5 flex-col sm:flex-col md:flex-row justify-between">
        <div class="flex items-center w-full xl:px-5">
          <BookDown class="w-6 h-6 text-primary  mr-3" />
          <span>Public Repos count:</span>
          <span class="ml-auto font-semibold !text-primary"
            >{statsData.publicRepos}</span
          >
        </div>

        <div class="flex items-center w-full xl:px-5">
          <BookLock class="w-6 h-6 text-primary  mr-3" />
          <span>Private Repos count:</span>
          <span class="ml-auto font-semibold !text-primary"
            >{statsData.privateRepos}</span
          >
        </div>
      </div>
      <div class="flex gap-4 flex-col sm:flex-col md:flex-row justify-between">
        <div class="flex items-center w-full xl:px-5">
          <GitPullRequestArrow class="w-6 h-6 text-primary mr-3" />
          <span>PR count:</span>
          <span class="ml-auto font-semibold !text-primary"
            >{statsData.prCount}</span
          >
        </div>

        <div class="flex items-center w-full xl:px-5">
          <GitCommitHorizontal class="w-6 h-6 text-primary  mr-3" />
          <span>Total contributions:</span>
          <span class="ml-auto font-semibold !text-primary"
            >{statsData.totalContributions}</span
          >
        </div>
      </div>
    </div>
    <p class="mx-auto p-4 text-stone-700 dark:text-stone-400 text-center font-sans"><Info size={20} class="inline-block mb-[4px] mr-1 text-black dark:text-stone-400"/>25k+ LOC merged into production for 7+ global projects, following best practices and reusability.</p>
  </div>
</section>
