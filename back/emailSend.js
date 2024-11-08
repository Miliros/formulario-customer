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
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });
  } catch (error) {
    console.error(
      "Error al enviar el correo:",
      error.response ? error.response.data : error.message
    );
  }
};

module.exports = { sendEmail };
