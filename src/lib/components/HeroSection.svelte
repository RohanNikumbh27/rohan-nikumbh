<script>
    import Rohan_image from "$lib/images/Rohan_Nikumbh.jpg"
    import Button from "$lib/components/form/Button.svelte"

</script>


<div class=" min-h-32 grid grid-col-4 gap-4 flex-wrap md:grid-flow-col">
    <div class="grid md:col-span-1 col-span-4 mt-0 pt-0">
        <div class="flex justify-center items-center flex-col">
            <img src={Rohan_image} alt="Img" class=" rounded-2xl">
            <!-- <h1 class=" text-xl mt-3 text-slate-500">Rohan Nikumbh</h1> -->
            <h1 class=" mt-3 font-[600] font-metropolis max-w-sm bg-gradient-to-br from-gray-600 via-teal-600 to-gray-500 bg-clip-text text-center text-4xl text-transparent ">Rohan Nikumbh</h1>
        </div>
    </div>
    
    <div class="col-span-3 md:p-6 items-center flex  flex-col justify-center rounded-2xl ">
      <div
      class="text-[1.9rem] leading-[39px] sm:text-[2.1rem] sm:leading-[44px] text-secondary-1 font-semibold"
    >
      Transforming Ideas into Seamless Experiences 🚀 - Currently Software Developer Intern @ Timechain Labs
    </div>
    <p class="mt-8 max-w-lg text-center text-xl leading-relaxed text-gray-800 ">
      I am Rohan Nikumbh, your tech partner in website development, weaving
      together Svelte, Next.js, React.js and MERN stack proficiency for exceptional digital
      transformations of your project visions.
    </p>
    <div class="flex gap-2 text-sm mt-7 md:-ml-20">
      <Button href="/contact" title="Let's Work Together"/>

      <Button href="/resume" title="Resume"/>
    </div>
    </div>
</div>


<div class="max-w-[600px]">
 </div>

