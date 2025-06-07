<script>
	import Footer from '$lib/components/Footer.svelte';
	import Sidebar from "$lib/components/Sidebar.svelte";
	import {onMount} from 'svelte';
	import '../app.css';
	console.log("%c" + " Don't try to copy the code, this overall code is written by, ", "font-size: 20px; ;border-radius: 10px; border: 1px solid black; background: red; color: white; font")
	console.log("%c" + ' Rohan Nikumbh ', "font-size: 40px; ;border-radius: 10px; border: 1px solid black; background: black; color: #4400ff")


    onMount(()=> {
        if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme) {
            var theme = savedTheme;
            document.documentElement.classList.toggle('dark', theme == 'dark');
        }
        }
    })
</script>
<div class="min-h-svh bg-white dark:bg-gradient-to-tr dark:from-[#0a0909] dark:to-[#4d4d4d] overflow-auto scroll-smooth">
	    <!-- <Header /> -->
    <Sidebar/>
    <div class="h-20 ">
    </div>
    <slot />
    <Footer />
</div>

<style>
</style>

