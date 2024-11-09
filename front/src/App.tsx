import { useState } from "react";
import "./App.css";
import logoStep from "../public/assets/logoStep.png";
import imgGroupe178 from "../public/assets/Group-178.png";
import imgSmall from "../public/assets/img-small.png";

import { dataDefaultSteps } from "./utils/dataDefaultSteps";
import { ContentStep } from "./components/ContentStep";
import { ButtonSteps } from "./components/ButtonSteps";
import { ProgressSteps } from "./components/ProgressSteps";

function App() {
  const [currentSteps, setcurrentSteps] = useState<number>(0);
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

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
      <ProgressSteps currentSteps={currentSteps + 1} />
      <div className={currentSteps === 5 ? "container-color" : "container"}>
        <div className="left-side">
          <img src={logoStep} className="imgLogo" alt="img-logo" />
          <ContentStep
            currentSteps={currentSteps}
            name={formValues.name}
            text={currentStepData.text}
            question={currentStepData.question}
            inputType={currentStepData.input_type}
            defaultValues={currentStepData.default_values}
            value={formValues[currentStepData.value] || ""}
            onChange={handleChange}
            handleSelectValue={handleSelectValue}
            currentStepValue={currentStepData.value}
          />
          <ButtonSteps
            currentSteps={currentSteps}
            setcurrentSteps={setcurrentSteps}
            label={currentStepData.label}
            value={formValues[currentStepData.value] || ""}
          />
        </div>
        <div className={currentSteps !== 5 ? "right-side" : "right-side-5"}>
          <p className="text-right-side">
            <span className="highlighted-step">
              {String(currentSteps + 1).padStart(2, "0")} |
            </span>
            06
          </p>
          <img
            src={imgGroupe178}
            className="img-rectangle img-large"
            alt="img-group-step-5"
          />
          <img src={imgSmall} className="img-small" alt="img-small" />
        </div>
      </div>
    </>
  );
}

export default App;
