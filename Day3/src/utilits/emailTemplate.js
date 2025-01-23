

export const emailTemplate = (url)=>{
    return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
          }
          h1 {
            color: #333;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to Our Website!</h1>
          <p>Thank you for signing up. You are now part of our community w toooz fekkk 👻!</p>
          <a href="${url}">Click here to verify your email</a>
        </div>
      </body>
    </html>
    `;
}