<script>
  export let image = "/Spotlight.jpg";
  export let lag = 0.07;
  export let bgSize = "cover";
  export let bgPosition = "center";
  export let radius = 230;
  export let visible = 0.15;
  export let hard = 10;
  export let soft = 200;
  export let resetOnLeave = false;

  const OFF = -1000;

  let el;
  let x = OFF,
    y = OFF,
    tx = OFF,
    ty = OFF;
  let raf = 0;
  let active = false;

  function setVars(nx, ny) {
    if (!el) return;
    el.style.setProperty("--x", `${nx}px`);
    el.style.setProperty("--y", `${ny}px`);
  }

  function animate() {
    const dx = tx - x;
    const dy = ty - y;
    x += dx * lag;
    y += dy * lag;
    setVars(x, y);
    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      raf = requestAnimationFrame(animate);
    } else {
      x = tx;
      y = ty;
      setVars(x, y);
      raf = 0;
    }
  }

  function moveTo(nx, ny) {
    tx = nx;
    ty = ny;
    if (!raf) raf = requestAnimationFrame(animate);
  }

  function onMouseMove(e) {
    active = true;
    moveTo(e.clientX, e.clientY);
  }

  function onTouchStart(e) {
    const t = e.touches[0] || e.changedTouches?.[0];
    if (!t) return;
    active = true;
    moveTo(t.clientX, t.clientY);
  }

  function onTouchMove(e) {
    const t = e.touches[0];
    if (!t) return;
    active = true;
    moveTo(t.clientX, t.clientY);
  }

  function reset(e) {
    if (
      !resetOnLeave &&
      (e?.type === "mouseleave" ||
        e?.type === "touchend" ||
        e?.type === "touchcancel")
    ) {
      return;
    }
    active = false;
    moveTo(OFF, OFF);
  }

  import { onDestroy } from "svelte";
  onDestroy(() => {
    if (raf) cancelAnimationFrame(raf);
  });
</script>

<section
  class="spotlight"
  class:reveal={active}
  on:mousemove={onMouseMove}
  on:mouseleave={reset}
  on:touchstart|passive={onTouchStart}
  on:touchmove|passive={onTouchMove}
  on:touchend={reset}
  on:touchcancel={reset}
  style={`--img: url('${image}'); --bg-size: ${bgSize}; --bg-position: ${bgPosition}; --r: ${radius}px; --visible: ${visible}; --hard: ${hard}%; --soft: ${soft}%`}
  bind:this={el}
>
  <div class="content">
    <slot />
  </div>
</section>

<style>
  .spotlight {
    --x: -1000px;
    --y: -1000px;
    --r: 220px;
    --visible: 1;
    --hard: 35%;
    --soft: 85%;
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }

  .spotlight::before {
    content: "";
    position: fixed;
    inset: 0;
    background: var(--bg-position, center) / var(--bg-size, cover) no-repeat
      var(--img, url(""));
    opacity: 0;
    transition: opacity 240ms ease;
    pointer-events: none;
    will-change:
      opacity,
      mask-image,
      -webkit-mask-image;
    mask-image: radial-gradient(
      var(--r) var(--r) at var(--x) var(--y),
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) var(--hard),
      rgba(255, 255, 255, 0) var(--soft)
    );
    -webkit-mask-image: radial-gradient(
      var(--r) var(--r) at var(--x) var(--y),
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) var(--hard),
      rgba(255, 255, 255, 0) var(--soft)
    );
  }

  .spotlight.reveal::before,
  .spotlight:hover::before,
  .spotlight:has(:focus)::before,
  .spotlight:active::before {
    opacity: var(--visible);
  }

  @supports not (mask-image: radial-gradient(circle, #000, transparent)) {
    .spotlight::before {
      opacity: 0;
    }
    .spotlight:hover::before {
      opacity: 0.18;
    }
  }

  .content {
    position: relative;
    z-index: 1;
  }
</style>
