<span class="absolute top-[6px] right-[6px] px-2 py-1 rounded-2xl text-xs font-[500] bg-zinc-400/20 border-2 border-zinc-900 text-white shadow overflow-hidden">
  <span
    class="pointer-events-none absolute top-1 w-3 h-3 -translate-y-2 rounded-full bg-zinc-300 blur animate-dot-move"
    style="left:0%"
  ></span>
  <slot />
</span>

<style>
  @keyframes dot-move {
    0%   { left: 0%;   opacity: 0; }
    10%  { left: 5%;   opacity: 1; }
    90%  { left: 95%;  opacity: 1; }
    100% { left: 100%; opacity: 0; }
  }
  .animate-dot-move {
    animation: dot-move 2s linear infinite;
  }
</style>