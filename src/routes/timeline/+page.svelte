<script>
  import ProgressComp from "./ProgressComp.svelte";

</script>




<div class=" p-4">
  <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
    <ProgressComp pos="left" title="Software Engineer Intern" desc="@Timechain labs (4 months)" date="June 24 - Oct 2024"/>
    <ProgressComp pos="right" title="Software Engineer Intern" desc="@Timechain labs (4 months)" date="June 24 - Oct 2024"/>
  </div> 
</div>




<style>
  .container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    /* background: radial-gradient(circle, #222, #111); */
    height: 100vh;
    align-items: start;
  }
</style>
