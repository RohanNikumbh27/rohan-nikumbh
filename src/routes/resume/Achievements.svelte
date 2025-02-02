
<script>
    import Button from "$lib/components/form/Button.svelte";
    import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

//   let certs = Array.from(document.querySelectorAll('.horizontal-box'))
//     .map(box => {
//         const nameElement = box.querySelector('.card-content a h3');
//         const byElement = box.querySelector('.card-content .caption-text');
//         const linkElement = box.querySelector('.card-content a');
        
//         return {
//             name: nameElement ? nameElement.textContent.trim() : null,
//             by: byElement ? byElement.textContent.trim() : null,
//             link: linkElement ? linkElement.href : null
//         };
//     })
//     .filter(cert => cert.name && cert.link);

// console.log(certs);

  let certifications = [
    {
        "name": "Google UX Design",
        "by": "Google",
        "link": "https://www.coursera.org/account/accomplishments/professional-cert/70TYGLVDP9WS"
    },
    {
        "name": "IBM DevOps and Software Engineering",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/professional-cert/YIJTVC60JWA2"
    },
    {
        "name": "Meta Back-End Developer",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/professional-cert/XG82DLFAD6MG"
    },
    {
        "name": "Google Project Management:",
        "by": "Google",
        "link": "https://www.coursera.org/account/accomplishments/professional-cert/V7M8ZJDKH7T0"
    },
    {
        "name": "Java FullStack Developer",
        "by": "Board Infinity",
        "link": "https://www.coursera.org/account/accomplishments/specialization/61IOHJOX6KNM"
    },
    {
        "name": "Meta Front-End Developer",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/professional-cert/T26UNKJK6W3Q"
    },
    {
        "name": "Applied Software Engineering Fundamentals",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/specialization/3PEOH7RGP69R"
    },
    {
        "name": "DevOps, Cloud, and Agile Foundations",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/specialization/7K3FSS6MO1MA"
    }
]



let courses = [
    
    
    {
        "name": "Continuous Integration and Continuous Delivery (CI/CD)",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/records/BW7092HI78AR"
    },
    {
        "name": "Back-End Developer Capstone",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/records/140WD2B6PJD7"
    },
    {
        "name": "Introduction to Test and Behavior Driven Development",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/records/ASM4EEC24CX4"
    },
    {
        "name": "DevOps Capstone Project",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/records/6CDGKUWL4TPR"
    },
    {
        "name": "Build Dynamic User Interfaces (UI) for Websites",
        "by": "Google",
        "link": "https://www.coursera.org/account/accomplishments/records/3JOJJNE5HF7P"
    },
    {
        "name": "Monitoring and Observability for Development and DevOps",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/records/UQF4279IMH3B"
    },
    {
        "name": "Application Development using Microservices and Serverless",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/records/JJW9Z9BBKMSU"
    },
    {
        "name": "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/records/SCRNGSB2XG54"
    },
    {
        "name": "Foundations of User Experience (UX) Design",
        "by": "Google",
        "link": "https://www.coursera.org/account/accomplishments/records/OO55K8WCZGHY"
    },
    {
        "name": "Create High-Fidelity Designs and Prototypes in Figma",
        "by": "Google",
        "link": "https://www.coursera.org/account/accomplishments/records/2TFPUWXZY8WK"
    },
    {
        "name": "Application Security for Developers and DevOps Professionals",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/records/RSUBR5Z400YT"
    },
    {
        "name": "Project Execution: Running the Project",
        "by": "Google",
        "link": "https://www.coursera.org/account/accomplishments/records/RMV9A46XIOGF"
    },
    {
        "name": "Project Planning: Putting It All Together",
        "by": "Google",
        "link": "https://www.coursera.org/account/accomplishments/records/7GFMTBKU46J9"
    },
    {
        "name": "Start the UX Design Process: Empathize, Define, and Ideate",
        "by": "Google",
        "link": "https://www.coursera.org/account/accomplishments/records/WQ7K2VNESR1Y"
    },
    {
        "name": "Design a User Experience for Social Good & Prepare for Jobs",
        "by": "Google",
        "link": "https://www.coursera.org/account/accomplishments/records/ZQM9MJ8J42QH"
    },
    {
        "name": "Build Wireframes and Low-Fidelity Prototypes",
        "by": "Google",
        "link": "https://www.coursera.org/account/accomplishments/records/6WC0WS1L60WX"
    },
    {
        "name": "Conduct UX Research and Test Early Concepts",
        "by": "Google",
        "link": "https://www.coursera.org/account/accomplishments/records/D8S8TGPHB81T"
    },
    {
        "name": "Capstone: Applying Project Management in the Real World",
        "by": "Google",
        "link": "https://www.coursera.org/account/accomplishments/records/1KVYK0IVBAX6"
    },
    {
        "name": "Agile Project Management",
        "by": "Google",
        "link": "https://www.coursera.org/account/accomplishments/records/PD7GUDXZK7QU"
    },
    {
        "name": "Project Initiation: Starting a Successful Project",
        "by": "Google",
        "link": "https://www.coursera.org/account/accomplishments/records/GPRGJHKG21TZ"
    },
    {
        "name": "Introduction to Software Engineering",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/records/73VHUJ2IJMVA"
    },
    {
        "name": "Foundations of Project Management",
        "by": "Google",
        "link": "https://www.coursera.org/account/accomplishments/records/F7ZOQZIR5ZN5"
    },
    {
        "name": "Developing AI Applications with Python and Flask",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/records/U659Y66S1KDX"
    },
    {
        "name": "APIs",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/records/FUUZNQD7E8JY"
    },
    {
        "name": "Python for Data Science, AI & Development",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/records/XHA7RWUIHJGN"
    },
    {
        "name": "Introduction to Agile Development and Scrum",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/records/NO10HABN9UMZ"
    },
    {
        "name": "The Full Stack",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/records/ALAP8ROGFW0Q"
    },
    {
        "name": "Frontend for Java Full Stack Development",
        "by": "Board Infinity",
        "link": "https://www.coursera.org/account/accomplishments/records/0WDLPO3Z2UO7"
    },
    {
        "name": "Hands-on Introduction to Linux Commands and Shell Scripting",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/records/PE61O9A1FT6L"
    },
    {
        "name": "Getting Started with Git and GitHub",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/records/2ITOTPPO4AGM"
    },
    {
        "name": "Fundamentals of Java Programming",
        "by": "Board Infinity",
        "link": "https://www.coursera.org/account/accomplishments/records/646MQBBLRP7E"
    },
    {
        "name": "Advanced React",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/records/EMFEBVLRAHNB"
    },
    {
        "name": "Principles of UX/UI Design",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/records/9270K1ZYO0ZD"
    },
    {
        "name": "Introduction to Cloud Computing",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/records/FKJ4NTT6V5T6"
    },
    {
        "name": "Django Web Framework",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/records/B5T4IZYK1NLP"
    },
    {
        "name": "Programming in Python",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/records/FLDVKOBS313A"
    },
    {
        "name": "Coding Interview Preparation",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/records/EBNL7CBFXO2V"
    },
    {
        "name": "Data Structures & Backend with Java",
        "by": "Board Infinity",
        "link": "https://www.coursera.org/account/accomplishments/records/8B334CQPB6TU"
    },
    {
        "name": "Introduction to Databases for Back-End Development",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/records/92I2YE9T8RVY"
    },
    {
        "name": "Introduction to DevOps",
        "by": "IBM",
        "link": "https://www.coursera.org/account/accomplishments/records/AELG1OJWR8QU"
    },
    {
        "name": "Version Control",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/records/JNB3NTNK2HVV"
    },
    {
        "name": "React Basics",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/records/SRGPONQ562NY"
    },
    {
        "name": "Programming with JavaScript",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/records/WNBM3YXUKA6G"
    },
    {
        "name": "Introduction to Back-End Development",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/records/3Q65SHQTFBCE"
    },
    {
        "name": "HTML and CSS in depth",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/records/B4EW1AQ2DSTW"
    },
    {
        "name": "Foundations: Data, Data, Everywhere",
        "by": "Google",
        "link": "https://www.coursera.org/account/accomplishments/records/28A2SHXAW3T7"
    },
    {
        "name": "Front-End Developer Capstone",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/records/AK2SY50OIFCZ"
    },
    {
        "name": "Introduction to Front-End Development",
        "by": "Meta",
        "link": "https://www.coursera.org/account/accomplishments/records/MVSGYRMCVEB6"
    }
];


import { onMount } from 'svelte';

  let showButton = false;

  onMount(() => {
    const handleScroll = () => {
      showButton = window.scrollY > window.innerHeight; // Show when scrolled more than 100vh
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

</script>

<h2 class="py-7  primary-heading text-center">Specialization</h2>
<section class=" text-primary-dark">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each certifications as cert, index}
            <div 
              in:fly="{{ y: 50, duration: 500, delay: index * 100, easing: quintOut }}"
              out:fade="{{ duration: 300 }}"
              class="justify-between flex flex-col bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600  rounded-3xl overflow-hidden  shadow-xl transform transition duration-300 ease-in-out hover:scale-[1.05] sm:hover:scale-[1.05] md:hover:scale-[1.1] hover:shadow-2xl"
            >
              <div class="p-6 relative flex flex-col justify-center flex-grow">
                <div class="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary to-primary transform rotate-45 translate-x-8 -translate-y-8"></div>
                <h3 class="text-xl font-semibold mb-2 relative z-10 text-zinc-800">{cert.name}</h3>
                <p class="text-zinc-900 text-sm relative z-10">Issued by: {cert.by}</p>
              </div>
              <a href={cert.link} target="_blank">
                
                  <div class="px-6 py-4  bg-primary-dark flex justify-between items-center cursor-pointer">
                      <span class="text-sm font-semibold text-purple-300">View Certificate</span>
                      <svg class="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </div>
            </a>
            </div>
        {/each}
      </div>
    </div>
  </section>

<h2 class="py-7  primary-heading text-center">Certifications</h2>
<section class=" text-primary-dark">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each courses as cert, index}
            <div 
              in:fly="{{ y: 50, duration: 500, delay: index * 100, easing: quintOut }}"
              out:fade="{{ duration: 300 }}"
              class="justify-between flex flex-col bg-gradient-to-r from-green-200 via-emerald-400 to-emerald-700 rounded-3xl overflow-hidden  shadow-xl transform transition duration-300 ease-in-out hover:scale-[1.05] sm:hover:scale-[1.05] md:hover:scale-[1.1] hover:shadow-2xl"
            >
              <div class="p-6 relative flex flex-col justify-center flex-grow">
                <div class="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary to-primary transform rotate-45 translate-x-8 -translate-y-8"></div>
                <h3 class="text-xl font-semibold mb-2 relative z-10 text-zinc-800">{cert.name}</h3>
                <p class="text-zinc-900 text-sm relative z-10">Issued by: {cert.by}</p>
              </div>
              <a href={cert.link} target="_blank">
                
                  <div class="px-6 py-4  bg-primary-dark flex justify-between items-center cursor-pointer">
                      <span class="text-sm font-semibold text-purple-300">View Certificate</span>
                      <svg class="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </div>
            </a>
            </div>
        {/each}
      </div>
    </div>
  </section>


  <div class="fixed bottom-3  right-3 p-4 transition-opacity duration-300 group" class:opacity-100={showButton} class:opacity-0={!showButton}>
    <!-- Tooltip -->
    <span class="absolute w-20 right-0 bottom-16 bg-primary-dark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      Back to top
    </span>
  
    <button class="bg-primary-dark text-white rounded-full w-10 h-10 flex items-center justify-center relative" on:click={backToTop}>
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  </div>