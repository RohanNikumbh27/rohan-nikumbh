import {GOOGLE_EMAIL} from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";
import {emailToAdmin} from "../../email_templates/emailToAdmin.js";
import {emailToUserTemplate} from "../../email_templates/emailToUserTemplate.js";

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const email = formData.get('email');
        const name = formData.get('name');
        const body = formData.get('description');
    
        const messageForUser = {
            from: GOOGLE_EMAIL,
            to: email,
            subject: `Thank you ${name} for Contacting Us`,
            text: body,
            html: emailToUserTemplate()
        };
        const messageForAdmin = {
            from: email,
            to: 'rohannikumbh2793@gmail.com',
            subject: `${name} Contacted you from your Portfolio`,
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
};