<script>
	import '../app.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { onMount } from 'svelte';
	import Sidebar from "$lib/components/Sidebar.svelte";
	console.log("%c" + " Don't try to copy the code, this overall code is written by, ", "font-size: 20px; ;border-radius: 10px; border: 1px solid black; background: red; color: white; font")
	console.log("%c" + ' Rohan Nikumbh ', "font-size: 40px; ;border-radius: 10px; border: 1px solid black; background: black; color: #4400ff")


    onMount(()=> {
        if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            theme = savedTheme;
            document.documentElement.classList.toggle('dark', theme === 'dark');
        }
        }
    })
</script>
<div class="min-h-svh">
	    <!-- <Header /> -->
     <Sidebar/>
    <div class="h-20 ">
    </div>
    <slot />
    <Footer />
</div>

<style>
</style>

