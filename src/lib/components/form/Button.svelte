<script>
  export let title = "SEE IN ACTION →";
  export let href = "#";
  export let target = "_self";

  let btn;
  let x = 0, y = 0;
  let ox = 0, oy = 0;
  let hovered = true;

  function updateOpp(rect) {
    ox = rect.width - x;
    oy = rect.height - y;
  }

  function handleMove(e) {
    const rect = btn.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    updateOpp(rect);
  }

  function center() {
    const rect = btn.getBoundingClientRect();
    x = 0;
    y = 0;
    updateOpp(rect);
  }
</script>

<a
  bind:this={btn}
  {href}
  {target}
  on:mousemove={handleMove}
  on:mouseenter={() => (hovered = true)}
  on:mouseleave={() => {
    hovered = true;
    center();
  }}
  class="relative group select-none overflow-hidden rounded-full tracking-wide
         px-5 py-3 inline-flex items-center justify-center
         transition-[box-shadow,background,transform] duration-300
         text-base text-neutral-100"
  style="--x:{x}px; --y:{y}px; --ox:{ox}px; --oy:{oy}px; --brand:#E50914;"
>
  <span class="relative z-30 text-[20px] text-white">{title}</span>

  <!-- Inner shine (compressed bright zone, earlier transition to dark, lets black ring read stronger) -->
  <span
    class="pointer-events-none absolute inset-0 z-20"
    style="background:
      radial-gradient(circle at var(--x) var(--y),
        rgba(255,235,238,0.72) 0%,    /* whitish red core */
        rgba(229,  9, 20,0.55) 10%,   /* mid red */
        rgba(150,  5, 12,0.42) 24%,   /* dark red */
        rgba(105,  3,  8,0.30) 38%,
        rgba(70,   2,  5,0.22) 50%,   /* very dark red */
        rgba(40,   1,  3,0.16) 60%,   /* near black */
        rgba(20,   1,  2,0.10) 68%,   /* almost black */
        rgba(0,    0,  0,0.00) 76%)   /* hand off to ring-edge for solid black */
      ; mix-blend-mode: plus-lighter;
      opacity:{hovered ? 1 : 0};
      transition: opacity .35s ease;"
  ></span>

  <span class="glow pointer-events-none absolute -inset-px z-10"></span>

  <!-- New dark ring that follows cursor (sits above glow, below text) -->
  <span
    class="ring-edge pointer-events-none absolute inset-0 z-20"
    style="opacity:{hovered ? 1 : 0};"
  ></span>
</a>

<svelte:window on:load={center} />

<style>
  a {
    position: relative;
    isolation: isolate;
    color: #fff;
    background: linear-gradient(140deg, #2b2b2b 0%, #1f1f1f 55%, #272727 100%);
    box-shadow:
      0 2px 4px rgba(0, 0, 0, 0.55),
      0 10px 22px -8px rgba(0, 0, 0, 0.65),
      0 26px 54px -16px rgba(0, 0, 0, 0.75),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 4px rgba(255, 255, 255, 0.06);
      
  }

  a:hover {
    box-shadow:
      0 3px 6px rgba(0, 0, 0, 0.45),
      0 14px 32px -8px rgba(0, 0, 0, 0.65),
      0 34px 72px -18px rgba(0, 0, 0, 0.7),
      inset 0 0 0 1px rgba(255, 255, 255, 0.18),
      inset 0 1px 6px rgba(255, 255, 255, 0.1);
  }

  /* Unified dynamic outer glow + opposing shadow */
  a::before {
    content: "";
    position: absolute;
    inset: -55%;
    z-index: -2;
    background:
      radial-gradient(
        circle at var(--x) var(--y),
        rgba(77, 76, 76, 0.5) 0%,
        rgba(229, 9, 20, 0.3) 32%,
        rgba(162, 6, 14, 0.16) 50%,
        rgba(110, 4, 8, 0.08) 64%,
        rgba(70, 2, 5, 0) 72%
      ),
      radial-gradient(
        circle at var(--x) var(--y),
        rgba(255, 58, 66, 0.42) 0%,
        rgba(229, 9, 20, 0.18) 28%,
        rgba(162, 6, 14, 0.08) 48%,
        rgba(110, 4, 8, 0) 60%
      ),
      radial-gradient(
        circle at var(--ox) var(--oy),
        rgba(0, 0, 0, 0.65) 0%,
        rgba(0, 0, 0, 0.4) 22%,
        rgba(0, 0, 0, 0.2) 38%,
        rgba(0, 0, 0, 0) 66%
      ),
      /* ring around the bright side */
        radial-gradient(
          circle at var(--x) var(--y),
          rgba(0, 0, 0, 0) 60%,
          rgba(0, 0, 0, 0.15) 74%,
          rgba(0, 0, 0, 0.3) 80%,
          rgba(0, 0, 0, 0.18) 85%,
          rgba(0, 0, 0, 0) 92%
        );
    opacity: 0;
    transition: opacity 0.45s;
    pointer-events: none;
  }
  a:hover::before {
    opacity: 0.95;
  }

  /* Unified hotspot bloom */
  a::after {
    content: "";
    position: absolute;
    top: calc(var(--y) - 170px);
    left: calc(var(--x) - 170px);
    width: 340px;
    height: 340px;
    background: radial-gradient(
      circle at center,
      rgba(255, 60, 68, 0.5) 0%,
      rgba(229, 9, 20, 0.32) 38%,
      rgba(162, 6, 14, 0.2) 54%,
      rgba(110, 4, 8, 0.12) 66%,
      rgba(60, 2, 5, 0.08) 70%,
      rgba(0, 0, 0, 0.25) 78%,
      rgba(0, 0, 0, 0.18) 84%,
      rgba(0, 0, 0, 0) 92%
    );
    opacity: 0;
    transition: opacity 0.35s;
    pointer-events: none;
    z-index: -1;
  }
  a:hover::after {
    opacity: 1;
  }

  /* Strengthened black edge ring */
  .ring-edge {
    background: radial-gradient(
      circle at var(--x) var(--y),
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.28) 72%,
      rgba(0, 0, 0, 0.55) 78%,
      rgba(0, 0, 0, 0.42) 84%,
      rgba(0, 0, 0, 0) 91%
    );
    transition: opacity 0.35s ease;
  }

  /* Rim glow: fade to black edge */
  .glow {
    background: radial-gradient(
      circle at 92% 50%,
      rgba(229, 9, 20, 0.55) 0%,
      rgba(229, 9, 20, 0.3) 28%,
      rgba(150, 5, 12, 0.18) 46%,
      rgba(70, 3, 8, 0.28) 60%,
      rgba(0, 0, 0, 0.38) 70%,
      rgba(0, 0, 0, 0) 82%
    );
    opacity: 1;
    transition: opacity 0.55s;
  }
  a:hover .glow {
    opacity: 0;
  }

  /* Add a dark ring around the inner shine (separate element so black is not lost by plus-lighter) */
  .ring-edge {
    background: radial-gradient(
      circle at var(--x) var(--y),
      rgba(0, 0, 0, 0) 63%,
      rgba(0, 0, 0, 0.14) 76%,
      rgba(0, 0, 0, 0.28) 82%,
      rgba(0, 0, 0, 0.2) 87%,
      rgba(0, 0, 0, 0) 94%
    );
    transition: opacity 0.35s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    a::before,
    a::after,
    .glow {
      transition: none;
    }
  }
</style>
