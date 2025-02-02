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


<section class="my-0 md:my-8 space-y-12 min-h-svh  w-full mx-auto px-4 md:px-6 lg:px-[20%] transition-c">
  <center>
    <h2 class=" primary-heading  my-1">Skills</h2>
  </center>
  <div class=" min-h-svh !mt-0">
      {#each skills as section, i}
      <div class="bg-zinc-100 min-h-[200px] my-3 rounded-3xl text-center relative z-[1]">
        <img src="/border-design.svg" alt="border-design" class="absolute h-[150px] right-0 bottom-0 z-[3]"/>
        <h1 class="pt-5 px-5 text-3xl bg-gradient-to-br from-primary to-primary bg-clip-text text-transparent  transition-all">{section.category}</h1>
        <div class="flex justify-center items-center flex-wrap py-5 px-5">
            {#each section.skills as skill, i}
                <div class="py-2 px-5 m-2 z-10 w-full md:w-auto cursor-pointer bg-primary-dark rounded-2xl text-[#ffffff] transform transition duration-300 ease-in-out hover:scale-[1.05] sm:hover:scale-[1.1] md:hover:scale-[1.1] hover:shadow-2xl">{skill.name}</div>
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
