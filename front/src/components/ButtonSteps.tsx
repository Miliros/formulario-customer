import "../styles/ButtonSteps.css";

import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

interface ButonStepsProps {
  currentSteps: number;
  setcurrentSteps?: (currentSteps: number) => void;
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
      setcurrentSteps?.(currentSteps + 1);
    }
  };

  const handlePrevSteps = () => {
    if (currentSteps >= 1) {
      setcurrentSteps?.(currentSteps - 1);
    }
  };

  const handleSendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("entra aca response", response.ok);
      if (response.ok) {
        window.location.href = "https://www.customerscoops.com/";
      }
    } catch (error) {
      window.location.href = "https://www.customerscoops.com/";
      console.error("Error:", error);
    }
  };

  return (
    <div className="conteiner">
      {currentSteps !== 0 && currentSteps !== 5 && (
        <button onClick={handlePrevSteps} className="round-button">
          <IconArrowNarrowLeft stroke={2} />
        </button>
      )}
      <button
        onClick={currentSteps === 5 ? handleSendEmail : handleNextSteps}
        disabled={value === "" && currentSteps !== 5}
        className="button"
      >
        {label}
        {label === "Siguiente" && (
          <IconArrowNarrowRight className="arrow-icon " stroke={1} />
        )}
      </button>
    </div>
  );
};
