

<script>
  import {enhance} from "$app/forms"
  import Button from "$lib/components/form/Button.svelte"
  export let data;
  import '../../app.css'
  $:console.log(data.revArr)
  $:reviewsArr = data.revArr

  // let reqStatus = "sending";
  let reqStatus = "notSent";
  let disableReqSend = false;
  function sendReqFn() {
    setTimeout(() => {
      reqStatus = "sending";
      
    }, 60);
    disableReqSend = true;
    setTimeout(() => {
      reqStatus = "sent"
    }, 2000);
  }

  
</script>


<div class="container">
    <div class=" bg-zinc-100 rounded-2xl md:px-10  px-5 sm:px-5" id="contact">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-center">
        <!-- <h2 class="text-4xl font-bold text-primary-dark">Contact</h2> -->
        <center>
          <h2 class=" primary-heading">Contact</h2>
        </center>
        <p
          class="pt-6 pb-6 text-base max-w-2xl text-center m-auto text-zinc-500"
        >
          Want to contact us? Choose an option below and well be happy to show you
          how we can transform companys web experience.
        </p>
      </div>
      <div
        class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16"
      >
        <div>
          <h2 class="text-lg font-bold text-zinc-900">Contact Us</h2>
          <p class="max-w-sm mt-4 mb-4 text-zinc-600">
            Have something to say? We are here to help. Fill up the form or send
            email or call phone.
          </p>
          <div
            class="flex items-center mt-8 space-x-2 text-dark-600 text-zinc-900"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
              <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
            </svg>
              
          <span>Pune</span>
          </div>
          <div
            class="flex items-center mt-2 space-x-2 text-dark-600 text-zinc-900"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-black">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            
            <a href="mailto:rohannikumbh2793@gmail.com">rohannikumbh2793@gmail.com</a>
          </div>
          <div
            class="flex items-center mt-2 space-x-2 text-dark-600 text-zinc-900"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
              <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
            </svg>
            
            <a href="tel:9284492299">+91 9284492299</a>
          </div>
        </div>
        <div>
          <form method="POST" use:enhance|>
            <!-- <input
              type="checkbox"
              id=""
              class="hidden"
              style="display:none"
              name="botcheck"
            /> -->
            <div class="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none  bg-zinc-300 focus:ring-1 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                name="name"
                required
              />
            </div>
            <div class="mb-5">
              <label for="email_address" class="sr-only">Email Address</label>
              <input
                id="email_address"
                type="text"
                placeholder="Email Address"
                class="w-full px-4 py-3 border-2 placeholder:text-gray-800 text-zinc-900 rounded-md outline-none dark:placeholder:text-zinc-900 bg-zinc-300 focus:ring-1 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                name="email"

              />
            </div>
            <div class="mb-3">
              <textarea
                placeholder="Your Message"
                class="w-full px-4 py-3 border-2 placeholder:text-gray-800 text-zinc-900 dark:placeholder:text-zinc-900 bg-zinc-300 rounded-md outline-none h-36 focus:ring-1 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                name="description"
                required
              >
              </textarea>
            </div>
            <!-- <button
              type="submit"
              class="w-full py-4 font-bold text-xl text-white rounded-full  hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 bg-zinc-700"
              >Send Message
            </button> -->
            <Button title="Submit"/>
            
          </form>
        </div>
      </div>
    </div>
    <div class=" mt-5 md:grid md:grid-cols-3 gap-3">
      {#each reviewsArr as review, i}
      <div class=" mt-3 bg-black text-white p-4 rounded-xl">
        <h1 class="text-white pb-2 overflow-scroll">{review.name}</h1>
        <div class=" p-2 bg-zinc-900 rounded-xl overflow-scroll">
          {review.description}
        </div>


      </div>
      {/each}
      
    </div>
  </div>
  

  <!-- request reviews access container -->
  <!-- <div class=" container rounded-[16px] !w-[362px]  h-[212px] bg-[#171717] flex flex-col items-center justify-evenly">
    <h1 class="text-[#D9D9D9] text-[20px]">Want to see all reviews ?</h1>
    <button 
      disabled={disableReqSend} 
      on:click={sendReqFn}
      class="bg-[#D9D9D9] smoothClick transition-all text-[#000] text-[20px] rounded-[16px] px-4 py-1 flex gap-1 items-center justify-center">
    
      <div class="fadeanimate">

        {#if reqStatus == "notSent"}
        <h1 class="fadeanimate">Request Access</h1>
        {:else if reqStatus == "sending"}
        <h1 class="fadeanimate">Request sending</h1>
        {:else if  reqStatus == "sent"}
        <h1 class="fadeanimate">Request sent</h1>        
        {/if}
      </div>

      <div class="ml-1 fadeanimate" >

        {#if reqStatus == "notSent"}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 fadeanimate">
          <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
        </svg>
        {:else if reqStatus == "sending"}
        <svg aria-hidden="true" class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        {:else if  reqStatus == "sent"}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 fadeanimate">
          <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
        </svg>
        {/if}
        </div>
     
    </button>
  </div> -->
  <div class="h-10 w-full"></div>
  
  <style>
      * {
          font-weight:400;
          font-family: inter;
      }
  </style>