// (el template de correo con HTML y estilos)
import { Html, Button } from "@react-email/components";

export function Email({ url }: { url: string }) {
  return (
    <Html lang="en">
      <head>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              padding: 20px;
            }
            .header {
              background-color: #ff5733;
              padding: 20px;
              text-align: center;
              color: white;
            }
            .content {
              padding: 20px;
              background-color: white;
              margin-top: 20px;
            }
            .button {
              background-color: #4CAF50;
              color: white;
              padding: 10px 20px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              margin-top: 20px;
              border-radius: 5px;
            }
          `}
        </style>
      </head>
      <body>
        <div className="header">
          <h1>Gracias por completar el formulario</h1>
        </div>
        <div className="content">
          <p>
            Gracias por completar la encuesta. Haz clic en el siguiente enlace
            para continuar:
          </p>
          <Button href={url} className="button">
            Ingresar Aquí
          </Button>
        </div>
      </body>
    </Html>
  );
}

export default Email;
