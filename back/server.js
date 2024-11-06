const express = require("express");
const { sendEmail } = require("./emailSend");
const cors = require("cors"); // Importar CORS

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Configurar CORS
app.use(cors()); // Permite todas las solicitudes CORS

app.use(express.json());

// Ruta para enviar correo
app.post("/send-email", async (req, res) => {
  try {
    // Llamada a la función que envía el correo
    await sendEmail();
    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Error al enviar el correo" });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
