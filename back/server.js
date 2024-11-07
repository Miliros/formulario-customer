const express = require("express");
const { sendEmail } = require("./emailSend");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());

app.post("/send-email", async (req, res) => {
  try {
    await sendEmail();
    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Error al enviar el correo" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
