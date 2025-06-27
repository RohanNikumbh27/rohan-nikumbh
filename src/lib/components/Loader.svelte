<script>
  export let className = "";
</script>

<div
  class={`loader rounded-2xl transition-all ${className} dark:invert dark:hue-rotate-180 dark:saturate-200`}
></div>

<style>
  .loader {
    position: relative;
    overflow: hidden;
    background: linear-gradient(
      120deg,
      #f0f0f0 25%,
      #ff000019 50%,
      #0000000d,
      #f0f0f0 75%
    );
    background-size: 200% 100%;
    animation: shimmer 2.5s infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
</style>
