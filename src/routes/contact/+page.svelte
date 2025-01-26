

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
            <button onclick="">
              <Button title="Submit" />
            </button>
            
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
  
<!-- 

  <div class="h-10 w-full"></div>
  
  <style>
      * {
          font-weight:400;
          font-family: inter;
      }
  </style>




<script>
  import { enhance } from "$app/forms";
  import Button from "$lib/components/form/Button.svelte";
  export let data;
  import "../../app.css";

  $: console.log(data.revArr);
  $: reviewsArr = data.revArr;

  let reqStatus = "notSent";
  let disableReqSend = false;

  function sendReqFn() {
    setTimeout(() => {
      reqStatus = "sending";
    }, 60);
    disableReqSend = true;
    setTimeout(() => {
      reqStatus = "sent";
    }, 2000);
  }
</script>

<div class="container">
  <div class="bg-zinc-100 rounded-2xl md:px-10 px-5 sm:px-5" id="contact">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-center">
      <center>
        <h2 class="primary-heading">Contact</h2>
      </center>
      <p class="pt-6 pb-6 text-base max-w-2xl text-center m-auto text-zinc-500">
        Want to contact us? Choose an option below and we'll be happy to show you how we can transform your company's web experience.
      </p>
    </div>
    <div
      class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16"
    >
      <div>
        <h2 class="text-lg font-bold text-zinc-900">Contact Us</h2>
        <p class="max-w-sm mt-4 mb-4 text-zinc-600">
          Have something to say? We are here to help. Fill out the form or send an email or call us.
        </p>
        <div class="flex items-center mt-8 space-x-2 text-dark-600 text-zinc-900">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="m11.54 22.351...Z" clip-rule="evenodd" />
          </svg>
          <span>Pune</span>
        </div>
        <div class="flex items-center mt-2 space-x-2 text-dark-600 text-zinc-900">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-black">
            <path d="M1.5 8.67...Z" />
          </svg>
          <a href="mailto:rohannikumbh2793@gmail.com">rohannikumbh2793@gmail.com</a>
        </div>
        <div class="flex items-center mt-2 space-x-2 text-dark-600 text-zinc-900">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="M1.5 4.5...Z" clip-rule="evenodd" />
          </svg>
          <a href="tel:9284492299">+91 9284492299</a>
        </div>
      </div>
      <div>
        <form method="POST" use:enhance>
          <div class="mb-5">
            <input
              type="text"
              placeholder="Full Name"
              class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none bg-zinc-300 focus:ring-1 border-gray-300 focus:border-gray-600 ring-gray-100"
              name="name"
              required
            />
          </div>
          <div class="mb-5">
            <input
              id="email_address"
              type="email"
              placeholder="Email Address"
              class="w-full px-4 py-3 border-2 placeholder:text-gray-800 text-zinc-900 rounded-md outline-none bg-zinc-300 focus:ring-1 border-gray-300 focus:border-gray-600 ring-gray-100"
              name="email"
              required
            />
          </div>
          <div class="mb-3">
            <textarea
              placeholder="Your Message"
              class="w-full px-4 py-3 border-2 placeholder:text-gray-800 text-zinc-900 bg-zinc-300 rounded-md outline-none h-36 focus:ring-1 border-gray-300 focus:border-gray-600 ring-gray-100"
              name="description"
              required
            ></textarea>
          </div>
          <button type="submit" disabled={disableReqSend}>
            <Button title="Submit" />
          </button>
        </form>
      </div>
    </div>
  </div>
  <div class="mt-5 md:grid md:grid-cols-3 gap-3">
    {#each reviewsArr as review}
    <div class="mt-3 bg-black text-white p-4 rounded-xl">
      <h1 class="text-white pb-2 overflow-scroll">{review.name}</h1>
      <div class="p-2 bg-zinc-900 rounded-xl overflow-scroll">
        {review.description}
      </div>
    </div>
    {/each}
  </div>
</div>

<style>
  * {
    font-weight: 400;
    font-family: inter;
  }
</style> -->
