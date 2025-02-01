export const emailToUserTemplate = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #141414;
            color: #ffffff;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background-color: #1f1f1f;
            border-radius: 8px;
            overflow: hidden;
            position: relative;
        }
        .header {
            text-align: center;
            position: relative;
        }
        .header img {
            width: 100%;
            height: auto;
        }
        .gold-frame {
            margin-top: 50px;
            height: 90px;
            width: 90px;
            border-radius: 50%;
            object-fit: cover;
            background: #fff;
        }
        .content {
            padding: 20px;
            text-align: center;
            position: relative;
        }
        .content h2 {
            color: #e50914;
        }
        .message {
            background-color: #222;
            padding: 15px;
            border-radius: 5px;
            margin-top: 10px;
            color: #bbb;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            background-color: #222;
            color: #bbb;
        }
        .footer a {
            color: #e50914;
            text-decoration: none;
        }
        .social-icons {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        .social-icons img:hover {
            background-color: #e50914;
        }
        .social-icons img {
            width: 24px;
            height: 24px;
            margin-left:10px;
            padding: 10px;
            border-radius: 8px;
            background-color: #f1f1f1;
            transition: 0.3s;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://media.licdn.com/dms/image/v2/D4D16AQHWrfpyvaPHQA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1722585273437?e=1743638400&v=beta&t=c8caqDi5TQXSxbhJgWiFOwHVdjOvIfQaqaMbRSNEpmk" alt="Header Image">
            <img src="https://rohan-nikumbh.vercel.app/Rohan_squared.png" alt="Rohan Nikumbh" class="gold-frame" style="height:90px; width:90px">
        </div>
        <div class="content">
            <h2>Thank You!</h2>
            <div class="message">
                <p>Thank you for your response. We respect your valuable time and will get back to you as soon as possible.</p>
            </div>
        </div>
        <div class="footer">
            <p style="font-size:9px">This is an automated email. In case of any query, please contact <a href="mailto:rohannikumbh2793@gmail.com">rohannikumbh2793@gmail.com</a>.</p>
            <div class="social-icons" style="margin-top: 20px;display: flex;justify-content:center; align-items: center;gap: 10px;flex-wrap: wrap;">
                <a href="mailto:rohannikumbh2793@gmail.com"><img src="https://rohan-nikumbh.vercel.app/socials/gmailIcon.png" alt="Gmail"></a>
                <a href="https://www.linkedin.com/in/rohan-nikumbh-989aa4244/"><img src="https://rohan-nikumbh.vercel.app/socials/linkedinIcon.png" alt="LinkedIn"></a>
                <a href="https://wa.me/9766576487"><img src="https://rohan-nikumbh.vercel.app/socials/whatsappIcon.png" alt="WhatsApp"></a>
                <a href="https://x.com/NikumbhRoh385?t=eN7tgDqDn-ltskTRXdj2vg&s=09"><img src="https://rohan-nikumbh.vercel.app/socials/xIcon.png" alt="Twitter"></a>
                <a href="https://www.youtube.com/channel/UCTa_SdCrLdmis9zCc9BJN_w"><img src="https://rohan-nikumbh.vercel.app/socials/youtubeIcon.png" alt="YouTube"></a>
                <a href="https://www.instagram.com/rohannikumbh/"><img src="https://rohan-nikumbh.vercel.app/socials/instaIcon.png" alt="Instagram"></a>
            </div>
        </div>
    </div>
</body>
</html>`;
}
