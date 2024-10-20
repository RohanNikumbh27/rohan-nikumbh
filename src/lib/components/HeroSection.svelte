<script>
    import Rohan_image from "$lib/images/Rohan_Nikumbh.jpg"
    import Button from "$lib/components/form/Button.svelte"

</script>


<div class="min-h-[40%] flex flex-col gap-4 md:flex-row md:items-stretch">
  <div class="mt-0 pt-0 sm:w-[20%] md:w-[40%] items-center flex h-full md:h-auto flex-col justify-between rounded-2xl">
    <img
      src={Rohan_image}
      alt="Img"
      class="rounded-2xl border-4 cursor-pointer hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] shadow-2xl transition-all hover:scale-105 h-[500px] mt-3 object-cover"
    />
  </div>

  <div class="items-center flex h-full md:h-auto flex-col justify-between rounded-2xl md:w-[60%]">
    <div class="max-w-lg font-[500] text-center text-3xl leading-relaxed text-zinc-950">
      Transforming Ideas into Seamless Experiences 🚀 - Currently Software Developer Intern @ Timechain Labs
    </div>
    <p class="max-w-lg text-center text-xl leading-relaxed text-gray-800">
      I am Rohan Nikumbh, your tech partner in website development, weaving
      together Svelte, <span class="bluelink">Next.js, React.js</span>, and <span class="bluelink">MERN stack</span> proficiency for exceptional digital
      transformations of your project visions.
    </p>
    <div class="flex gap-2 text-sm font-[500] items-center w-full sm:w-full md:w-[70%] mt-5">
      <Button href="/contact" title="Let's Work Together" />
      <Button href="/resume" title="Resume" />
    </div>
  </div>
</div>


<div class="max-w-[600px]">
 </div>


