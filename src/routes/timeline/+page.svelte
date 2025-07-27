<script>
  import ProgressComp from "./ProgressComp.svelte";

  const timeline = [
    {
      pos: "left",
      title: "Software Engineer Intern",
      desc: "@Syngenta",
      date: "Jan 2025 - July 2025",
      tag: "work",
    },
    {
      pos: "right",
      title: "BlackRock Hackathon",
      desc: "Achieved 4th Rank & awarded for best Idea.",
      date: "July 18, 19, 20",
      tag: "hackathon",
    },
    {
      pos: "left",
      title: "Software Engineer Intern",
      desc: "@Timechain labs",
      date: "June 2024 - Oct 2024",
      tag: "work",
    },
    {
      pos: "right",
      title: "Design Head",
      desc: "@CodeChef Club, VIIT",
      date: "Jan 2024 - May 2024",
      tag: "leadership + work",
    },
    {
      pos: "left",
      title: "Design Joint Head",
      desc: "@CodeChef Club, VIIT",
      date: "Oct 2023 - Jan 2024",
      tag: "leadership + work",
    },
    {
      pos: "right",
      title: "Web Developer Intern",
      desc: "@CodSoft",
      date: "1 Aug 2023 - 31 Aug 2023",
      tag: "work",
    },
    {
      pos: "left",
      title: "B.Tech in Information Technology",
      desc: "@VIIT, Pune",
      date: "June 22 - June 25",
      tag: "education",
    },
    {
      pos: "right",
      title: "Diploma Engineer Trainee",
      desc: "@ARaymond India Pvt. Ltd.",
      date: "Aug 2022 - Nov 2022",
      tag: "work",
    },
    {
      pos: "left",
      title: "Diploma in E&TC",
      desc: "@Government Polytechnic Nashik",
      date: "Aug 2019 - July 2022",
      tag: "education",
    },
    {
      pos: "right",
      title: "6th to 10th",
      desc: "@S.G.S Highschool, Pachora",
      date: "July 2014 - July 2019",
      tag: "education",
    },
    // Add more events as needed
  ];
</script>

<div class=" p-4 transition-c">
  <center>
    <h2 class=" primary-heading dark:text-white mb-2 mt-2 md:mt-10">
      Timeline
    </h2>
  </center>
  <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid transition-c max-w-screen-xl">
    {#each timeline as event}
      <ProgressComp
        pos={event.pos}
        title={event.title}
        desc={event.desc}
        date={event.date}
        tag={event.tag}
      />
    {/each}
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
