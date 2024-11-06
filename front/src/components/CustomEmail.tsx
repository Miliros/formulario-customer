import {
  Html,
  Body,
  Container,
  Text,
  Img,
  Section,
  Button,
} from "@react-email/components";

export default function CustomEmail() {
  return (
    <Html>
      <Body
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif", // Fuente por defecto
          backgroundColor: "#f4f4f4",
        }}
      >
        {/* Incluir la fuente K2D de Google Fonts en el estilo del body */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=K2D&display=swap');
          `}
        </style>

        <Container
          style={{
            width: "434px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
          }}
        >
          {/* Header con logo e imagen */}
          <Section
            style={{
              backgroundColor: "#00C0E4",
              padding: "60px",
              textAlign: "center",
            }}
          >
            <Img
              src="/assets/logo.png"
              alt="logo"
              width="100"
              style={{ borderRadius: "90%" }}
            />
          </Section>

          {/* Saludo personalizado */}
          <Section style={{ paddingLeft: "40px", width: "580px" }}>
            <Text
              style={{
                fontFamily: "K2D, Arial, sans-serif", // Usar la fuente K2D
                fontSize: "17px", // Tamaño de la fuente
                fontWeight: "700", // Peso de la fuente
                lineHeight: "25px", // Altura de línea
                textAlign: "left", // Alinear el texto a la izquierda
              }}
            >
              Hola Anthony,
            </Text>
            <Text
              style={{
                fontFamily: "K2D, Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.5",
                marginTop: "20px",
              }}
            >
              En Customer Scoops nos importa mucho tu experiencia, y queremos
              asegurarnos de que nuestros servicios sigan cumpliendo tus
              expectativas. Por eso, hemos preparado unas breves preguntas para
              que puedas compartir tus comentarios y sugerencias.
            </Text>
            <Text
              style={{
                fontFamily: "K2D, Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.5",
                marginTop: "20px",
              }}
            >
              Tu opinión es clave para ayudarnos a mejorar y adaptarnos a lo que
              realmente necesitas. Nos tomará solo unos minutos de tu tiempo.
            </Text>
          </Section>

          {/* Botón */}
          <Section
            style={{ textAlign: "start", paddingLeft: "40px", width: "580px" }}
          >
            <Button
              href="https://link-to-survey.com"
              style={{
                backgroundColor: "#000",
                display: "flex",
                textAlign: "center",
                padding: "8px",
                color: "#fff",
                justifyContent: "center",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: "bold",
                width: "186px",
                fontSize: "13px",
                marginTop: "20px",
              }}
            >
              Ingresa Aquí
            </Button>
            <Text
              style={{
                fontFamily: "K2D, Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.5",
                marginTop: "20px",
              }}
            >
              Agradecemos de antemano tu participación y confianza en Customer
              Scoops. ¡Gracias por tu tiempo y por contribuir a nuestra mejora
              continua!
            </Text>
            <Text
              style={{
                fontFamily: "K2D, Arial, sans-serif",
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Saludos,
              <br />
              Milagros
              <br />
              Equipo de Customer Scoops
            </Text>
          </Section>

          {/* Footer */}
          <Section
            style={{
              backgroundColor: "#333",
              color: "#fff",
              textAlign: "center",
              padding: "10px",
            }}
          >
            <Text style={{ fontSize: "14px" }}>Customer Scoops</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
