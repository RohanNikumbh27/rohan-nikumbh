<script>
  import {applyAction,enhance} from "$app/forms";
  import CustomToast from "$lib/components/common/Toast.svelte";
  import Button from "$lib/components/form/Button.svelte";
  import Spinner from "$lib/images/svgs/Spinner.svg.svelte";
  import {showToast} from "$lib/store/toastStore.js";
  import Achievements from "./Achievements.svelte";
  import SeeAllReviews from "./SeeAllReviews.svelte";
  let resumeLink =
    "https://drive.google.com/file/d/1AA0P-GukJJJbwI_l7wkq8JXQXowZPHD1/view?usp=sharing";
  let position = {
    style:
      "color:#fdfdfd; font-weight:bold; padding: 16px; background:black; border-radius:30px",
  };
 
  export let form;

  let name = "";
  let feedbackMsg = "";
  let saveState = "notStarted";
  // let saveState = "saving";
  // let saveState = "saved";
</script>

<h2 class="primary-heading text-center dark:text-white pt-7 pb-4 mt-2 md:mt-7">
  Resume
</h2>

<div class="flex items-center mt-2">
  <Button title="View Resume" href={resumeLink} target="_blank" />
</div>

<div class="my-10 flexc transition-c ">
      <div class="w-[90vw] min-h-[230px] xs:w-[340px]  flexc z-11 bg-black p-[10px]">
          {#if saveState == "saved"}
            <span class="text-[#D9D9D9] text-[20px] text-wrap text-center">Thank you for giving feedback</span>
          {:else if saveState == "saving"}
            <Spinner/>
          {:else}
          <form
            method="POST"
            use:enhance={({ formElement, formData, action, cancel }) => {
              saveState = "saving";
              return async ({ result }) => {
                if (result.type === "success") {
                  saveState = "saved";
                  showToast({
                    message: "Feedback sent to Rohan Nikumbh",
                    type: "success",
                  });
                } else {
                  if (result?.data?.missing) {
                    showToast({ message: result?.data?.message, type: "error" });
                  }
                  setTimeout(() => {
                    saveState = "notStarted";
                  }, 300);
                  await applyAction(result);
                }
              };
            }}
            class="gap-[10px] flex flex-col"
          >
              <textarea
                bind:value={feedbackMsg}
                name="feedbackMsg"
                class="w-full smoothClick bg-zinc-900 text-white flexc placeholder text-center pt-[12px] px-10 rounded-[20px] min-h-[150px]"
                placeholder="Give feedback on resume, portfolio..."
              ></textarea>
              <div class="w-full h-[50px] xs:h-[50px] flexc gap-[10px] flex-row">
                <input
                  bind:value={name}
                  name="name"
                  class="h-full w-full smoothClick text-white bg-zinc-900 rounded-[20px] px-4"
                  placeholder="Enter Your name"
                />
                <button
                  class="h-[95%] w-[30%] flexc smoothClick bg-[#D9D9D9] text-zinc-900 font-medium !rounded-[20px] text-xl px-2"
                  >Save</button
                >
              </div>
          </form>
        {/if}

    
  </div>
</div>

<!-- <SeeAllReviews/> -->

<Achievements />

<div class="h-[40px]"></div>

<CustomToast />

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
