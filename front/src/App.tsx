import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import { ButtonSteps } from "./components/ButtonSteps";
import { Step } from "./components/Step";
import { dataDefaultSteps } from "./utils/dataDefaultSteps";

function App() {
  const [currentSteps, setcurrentSteps] = useState<number>(0);
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  console.log(formValues, "a");
  const currentStepData =
    dataDefaultSteps.find((step) => step.steps === currentSteps) ||
    dataDefaultSteps[0];

  const handleChange = (event: { target: { value: string } }) => {
    if (currentStepData) {
      setFormValues((prevValues) => ({
        ...prevValues,
        [currentStepData.value]: event.target.value,
      }));
    }
  };

  const handleSelectValue = (item: string) => {
    if (currentStepData) {
      setFormValues((prevValues) => ({
        ...prevValues,
        [currentStepData.value]: item,
      }));
    }
  };
  return (
    <>
      {currentStepData && (
        <Step
          currentSteps={currentSteps}
          name={formValues.name}
          text={currentStepData.text}
          question={currentStepData.question}
          inputType={currentStepData.input_type}
          defaultValues={currentStepData.default_values}
          value={formValues[currentStepData.value] || ""}
          onChange={handleChange}
          handleSelectValue={handleSelectValue}
        />
      )}

      <ButtonSteps
        currentSteps={currentSteps}
        setcurrentSteps={setcurrentSteps}
        label={currentStepData?.label}
        value={formValues[currentStepData.value] || ""}
      />
    </>
  );
}

export default App;
