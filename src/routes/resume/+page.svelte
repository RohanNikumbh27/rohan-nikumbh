<script>
  import Button from "$lib/components/form/Button.svelte";
  import {enhance, applyAction} from "$app/forms";
  import toast, { Toaster } from "svelte-french-toast";
import Achievements from "./Achievements.svelte";
  let resumeLink = "https://drive.google.com/file/d/14ZERfVAFdYRxAyox7wQHorNyYzQhPsgp/view"
  let position = {style:"color:#fdfdfd; font-weight:bold; padding: 16px; background:black; border-radius:30px"};
  let reqStatus = "notSent";
  let disableReqSend = false;
  export let form;

  $:currencyObj = {
    name: "",
    symbol: "",
    iso_code: "",
  }


  // const getUsersCurrentAddress = async (latitude, longitude) => {
  //   try {
  //       const apiKey = "a5c44d8678ef43d098a989a5c4fe8ead";
  //       let query = `${latitude},${longitude}`
  //       const apiUrl = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${query}`;


  //       const res = await fetch(apiUrl);
  //       const data = await res.json()
  //       let currency = data?.results[0]?.annotations?.currency;

  //       currencyObj.name = currency.name;
  //       currencyObj.symbol = currency.symbol;
  //       currencyObj.iso_code = currency.iso_code;

  //       userCurrency.set(currencyObj);
  //       return currency;
        
  //   } catch (error) {
  //       console.log(error);
  //   }
    

  // };

  const sendReqFn = async () => {
    reqStatus = "sending";

    setTimeout(() => {
        disableReqSend = true;
        reqStatus = "sent"
        toast.success("Request sent successfully", position)
    }, 2000);
  };

  let name = "";
  let feedbackMsg = "";
  let saveState = "notStarted";

  
    
</script>


  <h2 class="py-7  primary-heading text-center">Resume</h2>

  <div class="flex items-center mt-2">

    <Button title="View Resume" href={resumeLink} target="_blank"/>
  </div>

<div
  class="my-10 flex items-center justify-evenly font-serif font-bold flex-col gap-1 "
>
  <div class="flex gap-3  sm:gap-4 md:gap-10 flex-col sm:flex-col md:flex-row">
    {#if saveState == "saved"}
      <div class="w-[100%]">
        <div
          class=" container rounded-[16px] bg-[#171717] !min-w-[340px] h-[250px] flexc !justify-evenly flex-col gap-3 !p-6 border-none focus:ring-none"
        >
          <h1 class="text-[#D9D9D9] text-[20px]">
            Thank you for giving feedback
          </h1>
        </div>
      </div>
    {:else if saveState == "saving"}
      <div class="w-[100%]">
        <div
          class=" container rounded-[16px] bg-[#171717] !min-w-[340px] h-[250px] flexc !justify-evenly flex-col gap-3 !p-6 border-none focus:ring-none"
        >
          <svg
            aria-hidden="true"
            class="w-14 h-14 text-black animate-spin fill-primary"
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
        </div>
      </div>
    {:else}
    
    <form 
      method="POST" 
      use:enhance={({ formElement, formData, action, cancel }) => {
        console.log("formData", formData)
        saveState = "saving";
        return async ({ result }) => {
          if (result.type === 'success') {
            saveState = "saved";
            toast.success("Feedback sent to Rohan Nikumbh", position)

          } else {
            if("result", result?.data?.missing){
              toast.error(result?.data?.message, position)
            }
            saveState = "notStarted";
            await applyAction(result);
          }
        };
      }}
    >

      
      <div class="w-[100%]">
        <div
          class=" container rounded-[16px] !bg-[#171717] !min-w-[340px] h-[250px] flexc !justify-evenly flex-col gap-3 !p-6 border-none focus:ring-none"
        >
          <textarea
            bind:value={feedbackMsg}
            name="feedbackMsg"
            class="w-full smoothClick grayd h-full flexc text-center pt-[12px] px-10 rounded-[20px] min-h-[100px]"
            placeholder="Give some feedback on resume..."
          ></textarea>
          <div class="w-full !pt-3 h-[40%] flexc gap-3 flex-row">
            <input
              bind:value={name}
              name="name"
              class="h-full w-full smoothClick flexc grayd rounded-[20px] pl-4"
              placeholder="Enter Your name"
            />
            <button
              class="h-full w-[30%] flexc smoothClick bg-[#D9D9D9] text-[#000] font-medium !rounded-[20px] text-xl px-2"
              >Save</button
            >
          </div>
        </div>
      </div>
    </form>
    {/if}

    <div
      class=" container rounded-[16px] !min-w-[340px] h-[250px] bg-[#171717] flex flex-col items-center justify-evenly"
    >
      <h1 class="text-[#D9D9D9] text-[20px]">Want to see all reviews ?</h1>
      <button
        disabled={disableReqSend}
        on:click={sendReqFn}
        class="bg-[#D9D9D9] {disableReqSend ? "cursor-text":"cursor-pointer"} smoothClick transition-all text-[#000] text-[20px] rounded-[16px] px-4 py-1 flex gap-1 items-center justify-center"
      >
        <div class="fadeanimate cursor-pointer">
          {#if reqStatus == "notSent"}
            <h1 class="fadeanimate">Request Access</h1>
          {:else if reqStatus == "sending"}
            <h1 class="fadeanimate">Request sending</h1>
          {:else if reqStatus == "sent"}
            <h1 class="fadeanimate">Request sent</h1>
          {/if}
        </div>

        <div class="ml-1 fadeanimate">
          {#if reqStatus == "notSent"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 fadeanimate"
            >
              <path
                fill-rule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clip-rule="evenodd"
              />
            </svg>
          {:else if reqStatus == "sending"}
          
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-primary-dark animate-spin  fill-primary"
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
          {:else if reqStatus == "sent"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 fadeanimate"
            >
              <path
                fill-rule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clip-rule="evenodd"
              />
            </svg>
          {/if}
        </div>
      </button>
    </div>
  </div>
</div>


<Achievements />

<div class="h-[40px]"></div>

<Toaster />

<style>
  .flexc {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grayd {
    background-color: #2a2a2a;
    color: #a6a6a6;
    font-weight: 400;
  }

  div {
    font-weight: 400;
    border-radius: 25px;
    font-size: 20px;
  }
</style>
