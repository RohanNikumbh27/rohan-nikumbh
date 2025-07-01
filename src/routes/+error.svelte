<script>
  export let error;
  export let status;
  import Button from "$lib/components/form/Button.svelte";
</script>

<div class="min-h-svh flex flex-col items-center justify-center">
  <h1 class="text-5xl font-semibold mb-4 text-center dark:text-stone-400 px-2">{error?.message || "Page Not Found"}</h1>
  <p class="text-2xl mb-4 text-primary">{status || 404}</p>
  <Button href="/" title="Go Home" />
</div>