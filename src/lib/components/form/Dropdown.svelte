<script>
  export let options = [];        // Array of dropdown options
  export let selectedValue = '';  // Selected value
  export let label = '';    // Label for the dropdown
  export let placeholder = 'Select'; // Placeholder text
  export let item = '';           // Currently selected item
  export let heading = "";
  export let onSelect;            // Callback function for selection
  import { scale } from 'svelte/transition'; // Animation for dropdown
  import { clickOutside } from '$lib/utils'; // Utility for detecting outside clicks
  let isOpen = false;             // Controls dropdown visibility

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  // console.log("options",options)

  function handleSelect(option) {
    selectedValue = option;
    item = option;
    isOpen = false;
    if (onSelect) {
      onSelect(option);
    }
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="relative w-full h-[80px] " 
  use:clickOutside
  on:outsideclick={()=>isOpen = false}
>
  <!-- Label for the dropdown -->
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="block mb-3 text-gray-700">{label}</label>
  
  <!-- Dropdown Button -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="w-full h-[45px] flex text-[#9D9D9D] justify-between items-center px-4 py-2 border-[1px] font-[600] border-[#BDBDBD] rounded-lg bg-white focus:outline-none cursor-pointer"
    on:click={toggleDropdown}
  >
    {item ? item : placeholder}
    <svg
      class="w-5 h-5 text-gray-500 transform transition-transform duration-300 {isOpen ? 'rotate-180' : ''}"
      fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M19 9l-7 7-7-7" />
    </svg>
  </div>

  <!-- Dropdown Options -->
  {#if isOpen}
  <div 
    class="absolute mt-1 w-full rounded-lg shadow-2xl bg-white max-h-[300px] z-20"
    in:scale={{ duration: 200, start: 0.97, top:0 }}
    out:scale={{ duration: 200, start: 0.97, top:0 }}
  >
    <div class="flex h-[40px] justify-between items-center px-4 py-2 border-b border-[#0000001A]">
      <span class="text-gray-600">{heading? heading : "Select "+label}</span>
      
      <!-- Close Dropdown Button -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div on:click={toggleDropdown}>
        <svg class="w-5 h-5 text-gray-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
    
    <ul class="my-2 max-h-32 overflow-y-auto">
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      {#each options as option}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <li
        class="px-4 flex items-center h-[40px] py-2 cursor-pointer hover:bg-gray-100 text-gray-500 mx-2 !rounded-xl"
        on:click={() => handleSelect(option.label)}
      >
        {option.label}
      </li>
      {/each}
    </ul>
  </div>
  {/if}
</div>

<style>
    /* Rotate the arrow when dropdown is open */
    .rotate-180 {
    transform: rotate(180deg);
  }

  scroll::-webkit-scrollbar {
  width: 10px;
}

/* Track */
scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
scroll::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
scroll::-webkit-scrollbar-thumb:hover {
  background: #555;
}



</style>
