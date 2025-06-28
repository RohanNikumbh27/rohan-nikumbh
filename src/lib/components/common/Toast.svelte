<script>
  import { closeToast, toasts } from "$lib/store/toastStore.js";
  import { X } from "lucide-svelte";
  import { scale } from "svelte/transition";
</script>

<div
  class="fixed top-20 left-1/2 -translate-x-1/2 w-[90vw] max-w-[95vw] md:top-28 md:right-6 md:left-auto md:translate-x-0 md:w-[380px] z-[99] flex flex-col gap-3"
>
  {#each $toasts as toast (toast.id)}
    <div
      class="font-serif w-full px-4 py-3 rounded-2xl custom-shadow flex items-center justify-between gap-1
         backdrop-blur-xl bg-stone-300/50 text-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-200 font-[400] border-b-[2px] ease-in
        {toast.type === 'success' ? 'border-green-600' : ''}
        {toast.type === 'error' ? 'border-primary' : ''}
        {toast.type === 'info' ? 'border-violet-700' : ''}"
      in:scale={{ duration: 200, start: 0.9 }}
      out:scale={{ duration: 200, start: 0.9 }}
    >
      <span class="flex-1 text-[20px]">{toast.message}</span>
      <button
        class="rounded-md text-md text-gray-400 hover:text-zinc-500"
        on:click={() => closeToast(toast.id)}
        aria-label="Close"
      >
        <X size={28} />
      </button>
    </div>
  {/each}
</div>
