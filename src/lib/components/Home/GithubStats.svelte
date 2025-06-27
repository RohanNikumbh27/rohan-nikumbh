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
  } from "lucide-svelte";

  const statsData = {
    publicRepos: "33+",
    privateRepos: "6+",
    prCount: "209+",
    totalContributions: "1729+",
  };
</script>

<div class="flex items-center justify-center pt-10 md:pt-0">
  <Github class="w-6 h-6 text-[#204dff] mr-3" />
  <span class=" text-zinc-900 text-3xl dark:text-zinc-100"
    >Github Stats <span class="text-sm text-zinc-500">(31/01/2025)</span></span
  >
</div>

<section class="m-[15px]">
  <div
    class="md:mb-10 bg-black text-white px-6 py-8 max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto my-2 rounded-xl"
  >
    <div class="space-y-4">
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
          <GitPullRequestArrow class="w-6 h-6 text-primary  mr-3" />
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
  </div>
</section>
