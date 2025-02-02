<script>
    export let project;
    import Button from "$lib/components/form/Button.svelte";
</script>

<div class="card inline-block rounded-2xl">
    <img src={project.image} alt={project.title} class="rounded-2xl mb-2"/>
    <h2>{project.title}</h2>
    <p>{project.description}</p>
    <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
    <p><strong>Date:</strong> {new Date(project.date).toLocaleDateString()}</p>
    <Button href={project.link} title="View Project"></Button>
</div>

<style>
    p {
        margin: 0.5rem 0;
    }
</style>
