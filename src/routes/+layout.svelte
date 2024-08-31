<script>
	import '../app.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    // import { spring } from 'svelte/motion';
    // let coords = spring({ x: 50, y: 50 }, {
	// 	stiffness: 0.1,
	// 	damping: 0.25
	// });
    // let size = spring(10);

// import PointerCircle from "$lib/components/Pointer.svelte"
console.log("%c" + " Don't try to copy the code, this overall code is written by, ", "font-size: 20px; ;border-radius: 10px; border: 1px solid black; background: red; color: white; font")
console.log("%c" + ' Rohan Nikumbh ', "font-size: 40px; ;border-radius: 10px; border: 1px solid black; background: black; color: #4400ff")
</script>
<!-- <PointerCircle/> -->

<div class="fixed top-0 left-0 w-full h-[2px] bg-gray-300">
		<div class="h-full bg-teal-600" id="readingProgress" style="width: 0;"></div>
	</div>
<div class="min-h-svh">
	

			
	
	
	<script>
		window.addEventListener("scroll", function() {
			var scrollY = window.pageYOffset || document.documentElement.scrollTop;
			var winHeight = window.innerHeight || document.documentElement.clientHeight;
			var docHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
			var scrollPercent = (scrollY / (docHeight - winHeight)) * 100;
			document.querySelector("#readingProgress").style.width = scrollPercent + "%";
		});
	</script>

    <Header />
    <!-- <svg
	on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY });
	}}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(10)}
	role="presentation"
>
<circle
		cx={$coords.x}
		cy={$coords.y}
		r={$size}
	/>
</svg> -->
    <!-- div space behind header -->
    <div class="h-20 ">
    </div>
    <slot />
    <Footer />
</div>

<style>
	/* svg {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}

	circle {
		fill: #818181;
        border: 2px solid  black;
        opacity: 50%;
	} */
</style>

