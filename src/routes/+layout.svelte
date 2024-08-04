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

import PointerCircle from "$lib/components/Pointer.svelte"
</script>
<!-- <PointerCircle/> -->


<div class="min-h-svh">

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

