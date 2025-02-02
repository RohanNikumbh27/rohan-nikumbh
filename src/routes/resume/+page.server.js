import {GOOGLE_EMAIL} from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";
import {fail} from "@sveltejs/kit";
import {resumeFeedback} from "../../email_templates/resumeFeedback.js";
// import {emailToUserTemplate} from "../../email_templates/emailToUserTemplate.js";

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        
        const feedbackMsg = formData.get('feedbackMsg').trim();
        const name = formData.get('name').trim();
        if (!feedbackMsg) {
            return fail(400, {missing: true, message: 'Please Enter a valid Feedback then press on Save!' });
        }
        if (!name) {
              return fail(400, {missing: true, message: 'Please Enter your name!' });
          }
          //   saveState = "saving";
          // setTimeout(() => {
          //   saveState = "saved";
          //   toast.success("Feedback submmited successfully", position);
          // }, 1000);
      
      
          const messageForAdmin = {
                      from: "anonymus@gmail.com",
                      to: 'rohannikumbh2793@gmail.com',
                      subject: `${name} has given feedback on your resume.`,
                      html: resumeFeedback(name, feedbackMsg)
                  };
                  
          
                  const sendEmail = async (message) => {
                      await new Promise((resolve, reject) => {
                          transporter.sendMail(message, (err, info) => {
                              if (err) {
                                  console.error("Error occurred while sending email:", err);
                                  reject(err);
                              } else {
                                  resolve(info);
                              }
                          });
                      });
                  };
          
                  try {
                      console.log("Sending email...");
                      const AdminRes = await sendEmail(messageForAdmin);
                      return {
                          success: "Emails are sent"
                      };
                  } catch (error) {
                      console.error("Failed to send email:", error);
                      return {
                          error: "Failed to send emails"
                      };
                  }
      
              }

        
};