<script>
	import '../app.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-svh">

    <Header />
    
    <!-- div space behind header -->
    <div class="h-20 ">
    </div>
    <slot />
    <Footer />
</div>
