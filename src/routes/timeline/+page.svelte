<script>
  import ProgressComp from "./ProgressComp.svelte";

</script>




<div class=" p-4">
  <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
    <ProgressComp pos="left" title="Software Engineer Intern" desc="@Timechain labs" date="June 24 - Oct 2024"/>
    <ProgressComp pos="right" title="Web Developer Intern" desc="CodSoft" date="1 Aug 2023 - 31 Aug 2023"/> 
    <ProgressComp pos="left" title="B.Tech in Information Technology" desc="VIIT, Pune" date="June 22 - June 25"/>
    <ProgressComp pos="right" title="Diploma Engineer Trainee" desc="ARaymond India Pvt. Ltd." date="Aug 2022 - Nov 2022"/> 
    <ProgressComp pos="left" title="Diploma in E&TC" desc="Government Polytechnic Nashik" date="Aug 2019 - July 2022"/> 
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
