<script>
  import Socials from "./Home/Socials.svelte";

  function trackContactClick() {
    if (window.gtag) {
      window.gtag('event', 'contact_footer_click', {
        event_category: 'Footer',
        event_label: 'Contact Rohan'
      });
    }
  }
</script>

<footer class="mb-0 bg-zinc-900 dark:bg-black relative overflow-hidden -z-100">
  <!-- Blurred circle background effect, sticks to the left (sidebar) -->
  <!-- <div
    class="absolute left-[20vw] top-1/4 w-[100vw] h-[100vh] bg-zinc-400/20 md:bg-zinc-500/20 rounded-full blur-3xl md:blur-[100px] pointer-events-none"
  ></div> -->

  <!-- Footer main content -->
  <div
    class="w-full flex flex-col md-custom:flex-row justify-between gap-6 mb-10 relative"
  >
    <div class="text-center mx-auto md-custom:mx-0 md-custom:text-left">
      <Socials />
    </div>
    <div>
      <p class="text-[24px]">Wanna Hire Me :) ?</p>
      <a
        href="/contact"
        class="text-primary shimmer-text !font-[500]"
        on:click={trackContactClick}
        >Contact Rohan</a
      >
    </div>
    <div class="text-center md-custom:text-right">
      <p class="text-secondary-1 hover:text-primary-1 text-zinc-500">
        🌍 Available to work Remotely
      </p>
      <p
        class="text-[12px] font-[400] text-secondary-2 md-custom:mt-1 text-zinc-500"
      >
        Made with ❤️ By Rohan Nikumbh
      </p>
      <p class=" text-center text-sm leading-6 text-zinc-500">
        © 2025 Rohan Nikumbh.
      </p>
    </div>
  </div>
</footer>
