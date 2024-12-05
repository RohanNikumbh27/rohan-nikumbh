<script>
	import '../app.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
	import Sidebar from "$lib/components/Sidebar.svelte";
	console.log("%c" + " Don't try to copy the code, this overall code is written by, ", "font-size: 20px; ;border-radius: 10px; border: 1px solid black; background: red; color: white; font")
	console.log("%c" + ' Rohan Nikumbh ', "font-size: 40px; ;border-radius: 10px; border: 1px solid black; background: black; color: #4400ff")
</script>

<div class="fixed top-0 left-0 w-full h-[2px] bg-gray-300">
		<div class="h-full bg-teal-600" id="readingProgress" style="width: 0;"></div>
		</div>
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

