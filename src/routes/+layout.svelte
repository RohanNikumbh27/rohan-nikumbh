<script>
	import '../app.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<!-- div for header -->
<div class="h-20">

</div>

<main>
    <slot />
</main>
<Footer />
