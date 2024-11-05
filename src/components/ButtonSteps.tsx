import { Resend } from "resend";
import Email from "./Email";

interface ButonStepsProps {
  currentSteps: number;
  setcurrentSteps: (currentSteps: number) => void;
  label: string | undefined;
  value: string;
}

export const ButtonSteps = ({
  currentSteps,
  setcurrentSteps,
  label,
  value,
}: ButonStepsProps) => {
  const handleNextSteps = () => {
    if (currentSteps < 6) {
      setcurrentSteps(currentSteps + 1);
    }
  };

  const handlePrevSteps = () => {
    if (currentSteps >= 1) {
      setcurrentSteps(currentSteps - 1);
    }
  };

  // Aquí usas tu API Key de Resend
  const resend = new Resend("re_qAgpbq47_D56CXfTMY4SrRX2C8uL6ZMP4");

  const sendEmail = async () => {
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "milagros4046@hotmail.com",
        subject: "¡Gracias por completar el formulario!",
        react: <Email url="https://example.com" />,
      });
      console.log("Correo enviado exitosamente");
      // Aquí puedes redirigir al usuario si lo deseas
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  };

  return (
    <div>
      {currentSteps !== 0 && currentSteps !== 5 && (
        <button onClick={handlePrevSteps}>Anterior</button>
      )}
      <button
        onClick={currentSteps === 5 ? sendEmail : handleNextSteps}
        disabled={value === "" && currentSteps !== 5}
      >
        {label}
      </button>
    </div>
  );
};
