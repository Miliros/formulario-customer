// import axios from "axios";
// import Email from "./Email";

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

  const handleSendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("entra aca response", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {currentSteps !== 0 && currentSteps !== 5 && (
        <button onClick={handlePrevSteps}>Anterior</button>
      )}
      <button
        onClick={currentSteps === 5 ? handleSendEmail : handleNextSteps}
        disabled={value === "" && currentSteps !== 5}
      >
        {label}
      </button>
    </div>
  );
};
