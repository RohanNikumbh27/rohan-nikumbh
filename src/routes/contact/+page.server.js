import {GOOGLE_EMAIL} from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";
import {fail} from "@sveltejs/kit";
import {emailToAdmin} from "../../email_templates/emailToAdmin.js";
import {emailToUserTemplate} from "../../email_templates/emailToUserTemplate.js";

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const email = formData.get('email').trim();
        const name = formData.get('name').trim();
        const body = formData.get('description').trim();

        if (!email && !name && !body) {
            return fail(400, {missing: true, message: 'All fields are required!' });
        } else if (!email) {
			return fail(400, { email, missing: true, message: 'Email is required!' });
		} else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            return fail(400, { email, missing: true, message: 'Enter a valid Email Address!' });
        }else if (!name) { 
            return fail(400, { name, missing: true, message: 'Name is required!' }); 
        }else if (!body) { 
            return fail(400, { body, missing: true, message: "Please write some message & then click on 'Submit'!" });
        }else {

            const messageForUser = {
                from: GOOGLE_EMAIL,
                to: email,
                subject: `Thank you ${name} for Contacting Us`,
                html: emailToUserTemplate()
            };
            const messageForAdmin = {
                from: email,
                to: 'rohannikumbh2793@gmail.com',
                subject: `${name}, Contacted you from your Portfolio`,
                html: emailToAdmin(name, email, body),
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
                const userRes = await sendEmail(messageForUser);
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
    
    
        
    }
};