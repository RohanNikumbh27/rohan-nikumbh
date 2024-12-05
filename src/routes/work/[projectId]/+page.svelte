<script>
    import { page } from '$app/stores';
    export let data;
  import ProjectDetails from '../../../lib/components/Cards/ProjectDetails.svelte';
    const projectId = $page.params.projectId;
</script>
<div>
    {projectId}
    
    <!-- <ProjectDetails/> -->

    <h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>

</div>