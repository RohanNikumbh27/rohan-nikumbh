<script>
    import { page } from '$app/stores';
  import ProjectDetails from '../../../lib/components/Cards/ProjectDetails.svelte';
    const projectId = $page.params.projectId;
</script>
<div>
    {projectId}
    
    <ProjectDetails/>

</div>