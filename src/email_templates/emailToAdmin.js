export const emailToAdmin = (name, email, description) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Response</title>
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
        }
        .gold-frame {
            margin-top: 50px;
            height: 90px;
            width: 90px;
            border-radius: 50%;
            object-fit: cover;
            background: #fff;
        }
        .header {
            text-align: center;
        }
        .header img {
            width: 100%;
            height: auto;
        }
        .content {
            padding: 20px;
            color: #ffffff;
        }
        .info {
            background-color: #222;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            font-weight: normal; /* Ensures text is not bold */
            color: #ffffff;
        }

        .info .title {
            color: #e50914;
            font-weight: bold; /* Keeps title bold */
        }

        .info span {
            font-weight: normal; /* Ensures values are thin */
        }

        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            background-color: #222;
            color: #ffffff;
        }
        .footer a {
            color: #e50914;
            text-decoration: none;
        }
        #email {
            color: white;
        }
        #email:hover {
            color: #e50914;
            transition: all 0.5s;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://rohan-nikumbh.vercel.app/Rohan_squared.png" alt="Rohan Nikumbh" class="gold-frame" style="height:90px; width:90px">
        </div>
        <div class="content">
        <p style="padding:15px;">Someone contacted you through your portfolio...</p>
            <div class="info">
                <span class="title">Name:</span> ${name}
            </div>
            <div class="info">
                <span class="title">Email:</span> <a id="email" href="mailto:${email}">${email}</a>
            </div>
            <div class="info">
                <span class="title">Description:</span> ${description}</div>
        </div>
        <div class="footer" style="font-size:9px">
            <p>Contact to user <a href="mailto:support@example.com">user@example.com</a></p>
        </div>
    </div>
</body>
</html>
`;
};
