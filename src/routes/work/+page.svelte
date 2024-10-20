<script>
    // import ProjectCard from '$lib/components/Cards/ProjectCard.svelte';
    import { onMount } from 'svelte';
    import ImageZoomCard from "$lib/components/Cards/ImageZoomCard.svelte";
  import ProjectDetails from '../../lib/components/Cards/ProjectDetails.svelte';

    let projects = [];
    let showDesc = true;
    const handleShowDesc = () => {
        showDesc = !showDesc;
    }

    onMount(async () => {
        const res = await fetch('/data/projects.json');
        const data = await res.json();
        projects = data.projects;
    });
</script>

<div class="flex items-center justify-center md:mt-10">
    <h1 class="mx-auto font-bold text-2xl text-slate-700">My Projects</h1>
</div>

<div class="h-5"></div>

<div class="container grid gap-10 md:grid-cols-3 sm:grid-cols-1">
    {#each projects as project}
        <!-- <ProjectCard {project} /> -->
            <ImageZoomCard {project} on:click{handleShowDesc}/>
            <!-- {#if showDesc}
            {/if} -->
    {/each}

</div>
