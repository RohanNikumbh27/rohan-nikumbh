<script>
  let cancle = false;
  const cancelIt = () => {
    cancle = !cancle;
  };
</script>

{#if !cancle}
  <div
    class="fixed z-4 inset-0 flex items-center justify-center bg-[#ffffff1d] backdrop-blur-sm"
  >
    <div class="bg-[#ffffff87] backdrop-blur-xl rounded-xl p-6 pt-10">
      <button on:click={cancelIt} class="absolute top-4 right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      HIhogsdsh
    </div>
  </div>
{/if}
