<script>
  import { perspectiveTilt } from "$lib/utils.js";

  export let skills = [
    {
      category: "Development & Programming",
      skills: [
        { name: "JavaScript", icon: "js.png" },
        { name: "React.js", icon: "react.png" },
        { name: "Svelte", icon: "svelte.png" },
        { name: "SvelteKit", icon: "svelte.png" },
        { name: "Next.js", icon: "nextjs.png" },
        { name: "Lynx.js", icon: "lynx.png" },
        { name: "Angular 20", icon: "angular20.png" },
        { name: "HTML", icon: "html.png" },
        { name: "CSS", icon: "css.png" },
        { name: "Java", icon: "java.png" },
        { name: "Bootstrap", icon: "bootstrap.png" },
        { name: "Ant Design (antd)", icon: "antd.png" },
        { name: "Tailwind CSS", icon: "tailwind.png" },
        { name: "shadcn", icon: "shadcn.png" },
        { name: "styled-components", icon: "styled-components.png" },
        { name: "Node.js", icon: "nodejs.png" },
        { name: "Express.js", icon: "expressjs.png" },
        { name: "TypeScript", icon: "ts.png" },
        { name: "Spring Boot", icon: "springboot.png" },
        { name: "Modular Programming", icon: "modular.png" },
        { name: "VLSI", icon: "vlsi.png" },
        { name: "Blockchain Fundamentals", icon: "blockchain.png" },
      ],
    },
    {
      category: "Cloud and DevOps",
      skills: [
        { name: "Git", icon: "git.png" },
        { name: "GitHub", icon: "github.png" },
        { name: "Linux Commands", icon: "linux.png" },
        { name: "Deployment", icon: "deployment.png" },
        { name: "Vercel", icon: "vercel.png" },
        { name: "AWS Fundamentals", icon: "aws.png" },
        { name: "Cloud Computing", icon: "cloud.png" },
        { name: "Docker Basics", icon: "docker.png" },
        { name: "CircleCI", icon: "circleci.png" },
      ],
    },
    {
      category: "Software Engineering",
      skills: [
        { name: "Software Engineering (SE)", icon: "se.png" },
        { name: "Software Testing", icon: "testing.png" },
        { name: "Automation Testing", icon: "automationtesting.png" },
        { name: "SDLC", icon: "sdlc.png" },
        { name: "Agile", icon: "agile.png" },
        { name: "Search Engine Optimization", icon: "seo.png" },
        { name: "OOP", icon: "oop.png" },
        { name: "DSA", icon: "dsa.png" },
      ],
    },
    {
      category: "Design and Prototyping",
      skills: [
        { name: "Figma", icon: "figma.png" },
        { name: "UI/UX", icon: "uiux.png" },
        { name: "Prototyping", icon: "prototyping.png" },
        { name: "UML", icon: "uml.png" },
      ],
    },
    {
      category: "Database Management",
      skills: [
        { name: "Database Management Systems (DBMS)", icon: "dbms.png" },
        { name: "MongoDB", icon: "mongodb.png" },
        { name: "MongoDB Atlas", icon: "mongodb-atlas.png" },
        { name: "Mongoose", icon: "mongoose.png" },
        { name: "SQL", icon: "sql.png" }, 
      ],
    },
    {
      category: "Testing and Tools",
      skills: [
        { name: "Playwright", icon: "playwright.png" },
        { name: "Jest", icon: "jest.png" },
        { name: "BrowserStack", icon: "browserstack.png" },
        { name: "Postman", icon: "postman.png" },
        { name: "Load Testing", icon: "loadtesting.png" },
        { name: "k6", icon: "k6.png" },
        { name: "Google Analytics", icon: "googleanalytics.png" },
        { name: "Confluence", icon: "confluence.png" },
        { name: "Jira", icon: "jira.png" },
        { name: "SonarQube", icon: "sonarqube.png" },
        { name: "Lighthouse", icon: "lighthouse.png" },
        { name: "axios", icon: "axios.png" },
        { name: "Leaflet js", icon: "leafletjs.png" },

      ],
    },
    {
      category: "Data Visualization",
      skills: [
        { name: "Chart.js", icon: "chartjs.png" },
        { name: "ApexCharts", icon: "apexcharts.png" },
        { name: "Plotly", icon: "plotly.png" },
      ],
    },
    {
      category: "Internationalization & Feature Flags",
      skills: [
        { name: "i18next", icon: "i18next.png" },
        { name: "LaunchDarkly", icon: "launchdarkly.png" },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Systematicness", icon: "systematicness.png" },
        { name: "Empathy", icon: "empathy.png" },
        { name: "Adaptability", icon: "adaptability.png" },
        { name: "Negotiation", icon: "negotiation.png" },
        { name: "Innovation", icon: "innovation.png" },
        { name: "Creativity", icon: "creativity.png" },
        { name: "Discipline", icon: "discipline.png" },
        { name: "Patience", icon: "patience.png" },
        { name: "Teamwork", icon: "teamwork.png" },
        { name: "Attention to Detail", icon: "attention.png" },
      ],
    },
  ];
</script>

<section
  class="my-0 md:my-8 space-y-12 min-h-svh w-full mx-auto px-4 md:px-6 lg:px-[20%] transition-c"
>
  <center>
    <h2 class=" primary-heading dark:text-white mb-5 mt-8 md:mt-3">
      Skills
    </h2>
  </center>
  <div class=" min-h-svh !mt-0">
    {#each skills as section, i}
      <div
        class="bg-stone-100 dark:bg-gray-dark min-h-[200px] my-3 rounded-3xl text-center relative z-[1] max-w-screen-2xl mx-auto border border-gray-dark/10 "
      >
        <h1
          class="pt-5 px-5 text-3xl bg-gradient-to-br from-primary to-primary bg-clip-text text-transparent transition-all"
        >
          {section.category}
        </h1>
        <div class="flex justify-center items-center flex-wrap py-5 px-5">
          {#each section.skills as skill, i}
            <div
              use:perspectiveTilt={{ scale: 1.1 }}
              class="skill-card flex items-center gap-3 py-2 px-4 md:px-5 m-1 md:m-2 w-full md:w-auto cursor-pointer bg-stone-950/90 dark:bg-zinc-90 rounded-2xl text-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary group-hover:bg-primary"
            >
              <span class="font-medium text-base md:text-lg">{skill.name}</span>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<div class="transition-transform transform hover:scale-110 hover:rotate-6" />

<style>
  .skill-card {
    transition:
      transform 0.3s ease,
      background-color 0.3s ease;
  }
  .skill-card:hover {
    transform: scale(1.1) rotate(2deg);
    background-color: #e60000;
  }
</style>
