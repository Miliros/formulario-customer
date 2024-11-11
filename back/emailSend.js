const { Resend } = require("resend");
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async () => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "milagros4046@hotmail.com",
      subject: "Formulario",
      html: `
     <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        display: flex;
        flex-direction: column;
        font-family: "K2D", sans-serif;
        color: #231331;
        margin: 0;
        max-width: 100%;
        text-align: left;
      }

      .email-content {
        width: 100%;
        margin: 0;
      }

  .email-header {
  width: 100%;
  height: 284px;
  display: flex;
  justify-content: center;
  padding-left: 18px;
}
  .email-header img {
width: 650px;
}


      .content-text {
        font-size: 16px;
        line-height: 1.5;
        padding: 20px;
        max-width: 540px; 
        margin: 0 auto; 
      }

      .button {
        background-color: #231331;
        border: none;
        color: #ffffff;
        width: 140px;
        border-radius: 50px;
        font-family: "SF Pro", sans-serif;
        font-size: 11.5px;
        font-weight: 510;
        line-height: 13.13px;
        text-align: center;
        padding:12px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-top: 30px;
        margin-bottom: 30px;
        text-decoration: none;
      }

      .email-footer {
      width: 100%;
      display: flex;
      justify-content: center;
      }

      .email-footer img {
        width: 120px;
        height: auto;
        display: block;
        margin: 0 auto;
      }
      .footer{
        width: 650px;
        display: flex;
        justify-content: center;
        background-color: #231331;
        padding-top: 30px;
        padding-bottom: 30px;
      }
    </style>
  </head>
  <body>
    <div class="email-content">
      <div class="email-header">
        <img src="https://res.cloudinary.com/dv0mf6px6/image/upload/v1731280181/Group_175_1_bmvt5g.png" alt="Header Image" />
      </div>

      <div class="content-text">
        <p><strong>Hola Anthony,</strong></p>
        <p>En Customer Scoops nos importa mucho tu experiencia, y queremos asegurarnos de que nuestros servicios sigan cumpliendo tus expectativas. Por eso, hemos preparado unas breves preguntas para que puedas compartir tus comentarios y sugerencias.</p>
        <p>Tu opinión es clave para ayudarnos a mejorar y adaptarnos a lo que realmente necesitas. Nos tomará solo unos minutos de tu tiempo.</p>

        <a href="https://formulario-customer.vercel.app/" class="button">
          Ingresar aquí
        </a>

        <p>Agradecemos de antemano tu participación y confianza en Customer Scoops. ¡Gracias por tu tiempo y por contribuir a nuestra mejora continua!</p>
        <p>Saludos,<br><strong>Milagros</strong><br>Equipo de Customer Scoops</p>
      </div>

      <div class="email-footer">
        <div class="footer"><img src="https://res.cloudinary.com/dv0mf6px6/image/upload/v1731273769/Group_nqanca.png" alt="Footer Image" /></div>
        
      </div>
    </div>
  </body>
</html>
      `,
    });
  } catch (error) {
    console.error(
      "Error al enviar el correo:",
      error.response ? error.response.data : error.message
    );
  }
};

module.exports = { sendEmail };
