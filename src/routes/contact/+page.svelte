
<script>
  import {enhance} from "$app/forms"
  import Button from "$lib/components/form/Button.svelte";
  let brevoAPI = import.meta.env.VITE_BREVO_API;
  export let data;
  import '../../app.css'
  // import { mailPost } from '$lib/sendMail.js'
  // import { mailForUser } from 'src/email_templates/mailForUser.js'
  



  let formErrors = {
    name: '',
    email: '',
    description: '',
  };

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
          
<form method="POST" use:enhance>
  <div class="mb-5">
    <input
      type="text"
      placeholder="Name"
      class="w-full px-4 py-3 border-4 placeholder:text-zinc-400 rounded-xl outline-none font-semibold bg-gray-200 focus:ring-0 border-transparent focus:border-[#9525253d]"
      name="name"
    />
    {#if formErrors.name}
      <div class="text-red-500 text-sm mt-1">{formErrors.name}</div>
    {/if}
  </div>

  <div class="mb-5">
    <input
      id="email_address"
      type="text"
      placeholder="Your Email Address"
      class="w-full px-4 py-3 border-4 placeholder:text-zinc-400 rounded-xl outline-none font-semibold bg-gray-200 focus:ring-0 border-transparent focus:border-[#9525253d]"
      name="email"
    />
    {#if formErrors.email}
      <div class="text-red-500 text-sm mt-1">{formErrors.email}</div>
    {/if}
  </div>

  <div class="mb-3">
    <textarea
      placeholder="Type your message here!"
      class="w-full px-4 py-3 border-4 placeholder:text-zinc-400 rounded-xl outline-none font-semibold bg-gray-200 focus:ring-0 border-transparent focus:border-[#9525253d]"
      name="description"
    ></textarea>
    {#if formErrors.description}
      <div class="text-red-500 text-sm mt-1">{formErrors.description}</div>
    {/if}
  </div>

  <button type="submit">
    <Button title="Submit" />
  </button>
</form>
        </div>
      </div>
    </div>
    <div class=" mt-10 "></div>
  </div>
   

  
  

