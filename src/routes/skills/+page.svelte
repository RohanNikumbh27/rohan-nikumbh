<script>
  import { fly } from 'svelte/transition';
  let hover = false;

  export let skills = [
    {
      category: 'Web Development Frontend',
      skills: [
        { name: 'JavaScript', icon: 'js.png' },
        { name: 'TypeScript', icon: 'ts.png' },
        { name: 'React.js', icon: 'react.png' },
        { name: 'Svelte', icon: 'svelte.png' },
        { name: 'Sveltekit', icon: 'svelte.png' },
        { name: 'Next.js', icon: 'nextjs.png' },
        { name: 'CSS', icon: 'css.png' },
        { name: 'Tailwind css', icon: 'tailwind.png' },
        { name: 'HTML', icon: 'html.png' },
      ],
    },
    {
      category: 'Web Development Backend',
      skills: [
        { name: 'Node.js', icon: 'nodejs.png' },
        { name: 'Express.js', icon: 'expressjs.png' },
        { name: 'MongoDB', icon: 'mongodb.png' },
        { name: 'MySQL', icon: 'mysql.png' },
      ],
    },
    {
      category: 'Cloud and DevOps',
      skills: [
        { name: 'AWS Fundamentals', icon: 'aws.png' },
        { name: 'Docker Basics', icon: 'docker.png' },
        { name: 'Git', icon: 'git.png' },
        { name: 'GitHub', icon: 'github.png' },
      ],
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Java', icon: 'java.png' },
        { name: 'Python', icon: 'python.png' },
        { name: 'VHDL Fundamentals', icon: 'vhdl.png' },
      ],
    },
    {
      category: 'Software Engineering',
      skills: [
        { name: 'Software Testing Basics', icon: 'testing.png' },
        { name: 'SDLC', icon: 'sdlc.png' },
        { name: 'UML', icon: 'uml.png' },
      ],
    },
    {
      category: 'Design and Prototyping',
      skills: [
        { name: 'Figma', icon: 'figma.png' },
        { name: 'UI/UX', icon: 'uiux.png' },
      ],
    },
    {
      category: 'Database Management',
      skills: [
        { name: 'Database Management Systems', icon: 'dbms.png' },
        { name: 'MongoDB Atlas', icon: 'mongodb-atlas.png' },
        { name: 'Mongoose', icon: 'mongoose.png' },
      ],
    },
    {
      category: 'Soft Skills',
      skills: [
        { name: 'Systematicness', icon: 'systematicness.png' },
        { name: 'Empathy', icon: 'empathy.png' },
        { name: 'Adaptability', icon: 'adaptability.png' },
        { name: 'Negotiation', icon: 'negotiation.png' },
        { name: 'Innovation', icon: 'innovation.png' },
        { name: 'Creativity', icon: 'creativity.png' },
        { name: 'Discipline', icon: 'discipline.png' },
        { name: 'Patience', icon: 'patience.png' },
        { name: 'Teamwork', icon: 'teamwork.png' },
      ],
    },
  ];
</script>


<section class="my-8 space-y-12 min-h-svh  w-full mx-auto px-4 md:px-6 lg:px-[20%] transition-c">

  <div class=" min-h-svh">
      {#each skills as section, i}
      <div class="bg-zinc-100 min-h-[200px] my-3 rounded-3xl text-center">
        <h1 class="px-2 pt-5 text-3xl  bg-gradient-to-bl hover:from-purple-300 hover:to-blue-800 bg-clip-text text-transparent from-zinc-300 to-zinc-800 transition-all ">{section.category}</h1>
          <div class=" flex justify-center items-center flex-wrap py-5 ">
            {#each section.skills as skill, i}
              <!-- <div class="">
                <h1 class="m-2 mx-5 text-2xl background-clip ">{skill.name}</h1>       
              </div> -->

              <!-- <div class="md:min-w-[30%] min-w-[40%] bg-gradient-to-tr from-indigo-600 via-pink-600 to-purple-600 h-[100px] cursor-pointer hover:scale-[1.05] transition-all  min-h-[100px] m-4 rounded-2xl text-white flex font-sans  items-center justify-center hover:p-1">
                <div class="w-full py-2 px-3 h-full rounded-xl bg-zinc-200  flex items-center justify-center">
                  <p class="text-2xl  font-[400] text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 italic">{skill.name}</p>
                </div>
              </div> -->
              <div class="py-2 px-4 m-2 hover:scale-105 transition-all cursor-pointer  bg-[#030712] rounded-md text-white">{skill.name}</div>
            {/each}
          </div>
      </div>
      {/each}
  </div>
  
</section>

<div class="transition-transform transform hover:scale-110 hover:rotate-6"/>


<style>
  .skill-card {
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  .skill-card:hover {
    transform: scale(1.1) rotate(2deg);
    background-color: #E60000;
  }
</style>
