<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- <div class="h-svh flex items-center justify-center font-serif font-bold flex-col">
    <h1 class="font-bold text-3xl">Skills Section</h1>
    <p>Under Construction</p>
</div> -->


<script>
    let showDetailedSkills = false;
    import ImageGallery from "$lib/components/SkillsComps/ImageGallery.svelte";
</script>



<!-- svelte-ignore missing-declaration -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex transition-all  items-center justify-center font-serif font-bold flex-col min-h-svh"
    
>
    {#if showDetailedSkills}
    <div class="animate">

        <ImageGallery/>
    </div>
    {:else}
        
    <div class=" transition-all gallery " on:click={()=>showDetailedSkills = true}>
        <!-- Rectangular Image -->
        <div class="gallery-item image-rect">
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 1">
        </div>
        <!-- Square Image -->
        <div class="gallery-item image-square">
          <img src="https://via.placeholder.com/200x200" alt="Placeholder Image 2">
        </div>
        <!-- Circular Image -->
        <div class="gallery-item image-circle">
          <img src="https://via.placeholder.com/100x100" alt="Placeholder Image 3">
        </div>
        <!-- Square Image -->
        <div class="gallery-item image-square">
          <img src="https://via.placeholder.com/200x200" alt="Placeholder Image 4">
        </div>
        <!-- Rectangular Image -->
        <div class="gallery-item image-rect">
          <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 5">
        </div>
        <!-- Hexagonal Image -->
        <div class="gallery-item image-hexagon">
          <img src="https://via.placeholder.com/200x200" alt="Placeholder Image 6">
        </div>
        <!-- Triangle Image -->
        <div class="gallery-item image-triangle">
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img src="https://via.placeholder.com/200x200" alt="Placeholder Image 7">
        </div>
        <div class="gallery-item image-star">
            <img src="https://via.placeholder.com/200x200" alt="Placeholder Image">
          </div>
      </div>   
    {/if}

</div>


<style>
     .gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      padding: 1rem;
    }

    .gallery-item {
        border-radius: 10px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .gallery-item img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .image-star {
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    }
    .image-rect {
      grid-column: span 2;
      border-radius: 0.5rem;
    }
    .image-square {
      aspect-ratio: 1;
    }
    .image-circle {
      border-radius: 50%;
      overflow: hidden;
    }
    .image-triangle {
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-bottom: 100px solid #ddd;
      overflow: hidden;
    }
    .image-triangle img {
      position: absolute;
      top: -75px; /* Adjust to fit the triangle */
      left: -50px; /* Adjust to fit the triangle */
      width: 200%;
    }
    .image-hexagon {
      clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
    }


    .animate {
        animation: zoom alternate ;
        animation-duration: 0.5s;
    }

    @keyframes zoom {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }
</style>