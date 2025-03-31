
<script>
  import {enhance, applyAction} from "$app/forms";
  import Button from "$lib/components/form/Button.svelte";
  import '../../app.css';
  export let form;
  // import { mailPost } from '$lib/sendMail.js'
  // import { mailForUser } from 'src/email_templates/mailForUser.js'
  



  let messageObj = {
    name: '',
    email: '',
    desc: '',
  };
  var formStatus =  "notSubmitted";
  $:console.log("formStatus", formStatus);
  async function handleFormSubmit(event) {
    event.preventDefault();
    formErrors = { name: '', email: '', description: '' };

    const formData = new FormData(event.target);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const description = formData.get('description')?.trim();

    let isValid = true;
    if (!name) { formErrors.name = 'Name is required!'; isValid = false; }
    if (!email) { formErrors.email = 'Email Address is required!'; isValid = false; }
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        formErrors.email = 'Enter a valid Email Address!';
        isValid = false;
    }
    if (!description) { formErrors.description = 'Message is required!'; isValid = false; }

    if (isValid) {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, description })
            });

            const result = await response.json();
            if (result.success) {
                alert('Email sent successfully!');
                event.target.reset(); // Clear form after successful submission
            } else {
                alert('Error: ' + result.message);
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while sending the email.');
        }
    }
}

  
</script>

<center>
  <h2 class="primary-heading pt-5 pb-3 ">Contact</h2>
</center>



<div class="container">
    <div class=" bg-zinc-100 rounded-2xl md:px-10  px-5 sm:px-5" id="contact">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-center">
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
          

{#if formStatus=="notSubmitted"}
<form 
  method="POST" 
  use:enhance={({ formElement, formData, action, cancel }) => {
    console.log("formData", formData)
    formStatus = "loading";
		return async ({ result }) => {
      if (result.type === 'success') {
        console.log('if success');
        formStatus = "submmited";
			} else {
        formStatus = "notSubmitted";
				await applyAction(result);
			}
		};
	}}
>
  {#if form?.missing}
      <div class="text-red-500 text-sm mb-5">{form?.message}</div>
    {/if}
  <div class="mb-5">
    <input
      type="text"
      placeholder="Name"
      class="w-full px-4 py-3 border-[3px] placeholder:text-zinc-400 rounded-2xl outline-none font-semibold bg-gray-200 focus:ring-0 border-transparent focus:border-primary-dark"
      name="name"
      bind:value={messageObj.name}
    />
  </div>

  <div class="mb-5">
    <input
      id="email_address"
      type="text"
      placeholder="Your Email Address"
      class="w-full px-4 py-3 border-[3px] placeholder:text-zinc-400 rounded-2xl outline-none font-semibold bg-gray-200 focus:ring-0 border-transparent focus:border-primary-dark"
      name="email"
      bind:value={messageObj.email}
    />
  </div>

  <div class="mb-3">
    <textarea
      placeholder="Type your message here!"
      class="w-full px-4 py-3 border-[3px] placeholder:text-zinc-400 rounded-2xl outline-none font-semibold bg-gray-200 focus:ring-0 border-transparent focus:border-primary-dark"
      name="description"
      bind:value={messageObj.desc}
      rows="2" 
    ></textarea>
  </div>
  

  <button type="submit">
    <Button title="Submit" />
  </button>
</form>
{:else if formStatus=="loading"}
<!-- <div class="container"> -->
  <div
    class=" container rounded-[16px] h-[250px] flex justify-center items-center flex-col gap-3 !p-6 border-none focus:ring-none"
  >
    <svg
      aria-hidden="true"
      class="w-14 h-14 text-primary animate-spin fill-primary-dark"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <p class="font-semibold text-primary-dark">Submitting :)</p>
  </div>
<!-- </div> -->
{:else if formStatus=="submmited"}
<div
    class=" container rounded-[16px] h-[250px] flex justify-center items-center flex-col gap-3 !p-6 border-none focus:ring-none"
  >
    <h1 class="text-primary-dark text-[29px] font-bold  ">
      (<span class="text-primary">: </span>Thank you for your response <span class="text-primary">:</span>)
    </h1>
</div>
{/if}
        </div>
      </div>
    </div>
    <div class=" mt-10 "></div>
  </div>
   

  
  

