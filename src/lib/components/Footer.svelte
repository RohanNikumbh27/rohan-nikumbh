<script>
  import Socials from "./Home/Socials.svelte";
</script>

<footer class="mb-0 bg-zinc-900 dark:bg-black relative overflow-hidden">
    <!-- Blurred circle background effect, sticks to the left (sidebar) -->
    <div
      class="absolute left-[20vw] top-1/4  w-[100vw] h-[100vh] bg-zinc-400/20 md:bg-zinc-500/20 rounded-full blur-3xl md:blur-[100px] pointer-events-none z-0"
    ></div>

    <!-- Footer main content -->
    <div class="w-full flex flex-col md-custom:flex-row justify-between gap-6 mb-10 relative z-10">
      <div class="text-center mx-auto md-custom:mx-0 md-custom:text-left">
        <Socials/>
      </div> 
      <div> 
        <p class="text-[24px]">Wanna Hire Me :) ? </p>

<!-- <a href="mailto:rohannikumbh2793@gmail.com" class="text-primary underline">rohannikumbh2793@gmail.com</a>
        <p>OR</p> -->
        <a href="/contact" class="text-primary">Contact Rohan</a>
      </div>
      <div class="text-center md-custom:text-right">
        <p class="text-secondary-1 hover:text-primary-1 text-slate-500">🌍 Available to work Remotely</p>
        <p class="text-[12px] font-[400] text-secondary-2 md-custom:mt-1 text-slate-500">Made with ❤️ By Rohan Nikumbh</p>
        <p class=" text-center text-sm leading-6 text-slate-500">© 2025 Rohan Nikumbh.</p>
      </div>
    </div>
</footer>


