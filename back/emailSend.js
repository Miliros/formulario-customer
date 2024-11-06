const { Resend } = require("resend"); // Cambia a la destructuración
require("dotenv").config(); // Asegúrate de cargar las variables de entorno

// Crear una instancia de Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Función para enviar el correo
const sendEmail = async () => {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "milagros4046@hotmail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });

    console.log("Correo enviado:", response); // Respuesta completa de la API
  } catch (error) {
    console.error(
      "Error al enviar el correo:",
      error.response ? error.response.data : error.message
    );
  }
};

module.exports = { sendEmail };
