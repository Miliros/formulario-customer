const { Resend } = require("resend");
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async () => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      //to: "anthony@customerscoops.com" actualmente solamente resend me deja agregar mi propio mail como dominio no me acepta el indicado
      to: "milagros4046@hotmail.com",
      subject: "Hello World",
      html: `
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body {
              font-family: "K2D", sans-serif;
              color: #231331;
              margin: 0;
              padding: 0;
              width: 100%;
              text-align: left;
            }

            .email-content {
              width: 90%;
              margin: 0 auto;
            }

            .email-header,
            .email-footer {
              text-align: left;
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
              padding: 7px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              margin-top: 20px;
            }

            .email-header img,
            .email-footer img {
              width: 100%;
              max-width: 600px;
              height: auto;
            }

            .content-text {
              font-size: 16px;
              line-height: 1.5;
            }
          </style>
        </head>
        <body>
          <div class="email-content">
            <div class="email-header">
              <img src="./img-small.png"alt="Header Image" />
            </div>

            <div class="content-text">
              <p>Hola Anthony,</p>
              <p>En Customer Scoops nos importa mucho tu experiencia, y queremos asegurarnos de que nuestros servicios sigan cumpliendo tus expectativas. Por eso, hemos preparado unas breves preguntas para que puedas compartir tus comentarios y sugerencias.</p>
              <p>Tu opinión es clave para ayudarnos a mejorar y adaptarnos a lo que realmente necesitas. Nos tomará solo unos minutos de tu tiempo.</p>

              <a href="https://formulario-customer.vercel.app/">
                <div class="button">
                  INGRESAR AQUÍ
                </div>
              </a>

              <p>Agradecemos de antemano tu participación y confianza en Customer Scoops. ¡Gracias por tu tiempo y por contribuir a nuestra mejora continua!</p>
              <p>Saludos,<br>Milagros<br>Equipo de Customer Scoops</p>
            </div>

            <div class="email-footer">
              <img src="./Rectangle185.png" alt="Footer Image" />
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
