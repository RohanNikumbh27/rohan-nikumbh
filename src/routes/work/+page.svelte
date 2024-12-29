<script>
    export let data;
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

<div class="h-5"></div>


<center>
    <h2 class=" primary-heading">Work</h2>
  </center>
<!-- <div class="flex items-center justify-center md:m-10">
    <h1 class="mx-auto font-semibold text-2xl text-slate-700">Under Development</h1>
</div> -->


<div class="container grid gap-10 md:grid-cols-3 sm:grid-cols-1">
    {#each projects as project}
            <a href="/personal-expense-tracker">
                <ImageZoomCard {project}/>
            </a>
    {/each}

    
</div>