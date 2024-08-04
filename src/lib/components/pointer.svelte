<script>

    import { spring } from 'svelte/motion';
    let coords = spring({ x: 0, y: 0 }, {
        	stiffness: 0.02,
        	damping: 0.12
        	// stiffness: 0.1,
        	// damping: 0.25
        });
        let size = spring(10);
    </script>

<svg
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
</svg>
<style>
	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}

	circle {
		fill: rgb(128, 0, 255);
		/* fill:gold; */
        border: 2px solid  black;
        opacity: 10%;
	}
</style>