import { StepsProps } from "../types/types";
import "../styles/ContentStep.css";

export const ContentStep = ({
  currentSteps,
  name,
  text,
  question,
  inputType,
  defaultValues,
  value,
  onChange,
  handleSelectValue,
  currentStepValue,
}: StepsProps) => {
  return (
    <>
      {currentSteps === 1 && name ? (
        <div className="header-text">
          <strong>Genial, {name}!</strong> {text}
        </div>
      ) : (
        <div className="header-text">
          <p dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      )}

      <div
        className={`header-text ${currentSteps === 5 ? "question-step-5" : ""}`}
        style={{
          marginTop: currentSteps === 5 ? "0px" : "17px",
          padding: "0px",
        }}
      >
        {question}
      </div>

      {inputType === "text" && (
        <input
          className="input-text"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Nombre"
        />
      )}

      {inputType === "select" && (
        <div
          className={`options-container ${
            currentStepValue === "challenge" ? "two-columns" : "three-columns"
          }`}
        >
          {defaultValues.map((item, index) => {
            const letter = String.fromCharCode(65 + index);

            return (
              <div
                onClick={() => handleSelectValue(item)}
                key={item}
                className={`option ${value === item ? "selected" : ""} ${
                  currentStepValue === "challenge" ? "challenge" : ""
                }`}
              >
                {currentStepValue === "challenge" && (
                  <div className="circle">{letter}</div>
                )}
                {item}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
