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


<!-- self blur bg circle  -->
<!-- <div class="w-[40vw] h-[40vh] fixed bg-orange-500/30 left-[1%] min-w-[100px] blur-[100px] -z-1000"></div>
<div class="w-[40vw] h-[40vh] fixed bg-primary-dark/20 right-1 bottom-[30%] min-w-[100px] blur-[100px] -z-1000"></div>
<div class="w-[50vw] h-[40vh] fixed bg-blue-500/30 left-[25vw] bottom-0 min-w-[100px] blur-[70px] -z-1000"></div> -->


<div class="min-h-svh from-[#abbaab]/40  to-[#ffffff] bg-gradient-to-r dark:from-neutral-600 dark:to-neutral-900 overflow-auto scroll-smooth z-100">
	    <!-- <Header /> -->
    <Sidebar/>
    <div class="h-20 z-200 ">
    </div>
    <slot />
    <Footer />
</div>

<style>
</style>

