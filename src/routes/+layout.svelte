<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import {onMount} from "svelte";
  import "../app.css";
  console.log(
    "%c" + " Don't try to copy the code, this overall code is written by, ",
    "font-size: 20px; ;border-radius: 10px; border: 1px solid black; background: red; color: white; font"
  );
  console.log(
    "%c" + " Rohan Nikumbh ",
    "font-size: 40px; ;border-radius: 10px; border: 1px solid black; background: black; color: #4400ff"
  );

  onMount(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light";
      if (savedTheme) {
        var theme = savedTheme;
        document.documentElement.classList.toggle("dark", theme == "dark");
      }
    }
  });
</script>

<svelte:head>
  <title>Rohan Nikumbh Portfolio</title>
  <meta name="description" content="Rohan Nikumbh - Software Engineer. Explore my portfolio, projects, skills, timeline, and contact information.">
  <meta name="keywords" content="Rohan Nikumbh, Rohan, Nikumbh, Rohan Nikum, Nikum, Software Engineer, Portfolio, Developer, Pune, India">
  <meta property="og:title" content="Rohan Nikumbh | Software Engineer" />
  <meta property="og:description" content="Portfolio of Rohan Nikumbh, Software Engineer. Explore my work, skills, and contact me for collaborations." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.rohannikumbh.me/" />
  <meta property="og:image" content="https://www.rohannikumbh.me/Rohan_Nikumbh.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Rohan Nikumbh | Software Engineer" />
  <meta name="twitter:description" content="Portfolio of Rohan Nikumbh, Software Engineer. Explore my work, skills, and contact me for collaborations." />
  <meta name="twitter:image" content="https://www.rohannikumbh.me/Rohan_Nikumbh.jpg" />
</svelte:head>

<!-- self blur bg circle  -->
<!-- <div class="w-[40vw] h-[40vh] fixed bg-orange-500/30 left-[1%] min-w-[100px] blur-[100px] -z-1000"></div>
<div class="w-[40vw] h-[40vh] fixed bg-primary-dark/20 right-1 bottom-[30%] min-w-[100px] blur-[100px] -z-1000"></div>
<div class="w-[50vw] h-[40vh] fixed bg-blue-500/30 left-[25vw] bottom-0 min-w-[100px] blur-[70px] -z-1000"></div> -->

<div
  class="min-h-svh bg-[#ffffff] bg-gradient-to-tr dark:from-zinc-950 dark:to-zinc-900 overflow-auto scroll-smooth z-100"
>
  <!-- <Header /> -->
  <Sidebar />
  <div class="pt-[60px] z-200 min-h-svh flex flex-col justify-center">
    <slot />
  </div>
  <Footer />
</div>

<style>
</style>
