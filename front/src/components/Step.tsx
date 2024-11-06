interface StepsProps {
  currentSteps: number;
  name: string;
  text: string;
  question: string;
  inputType: string | undefined;
  defaultValues: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectValue: (item: string) => void;
}

export const Step = ({
  currentSteps,
  name,
  text,
  question,
  inputType,
  defaultValues,
  value,
  onChange,
  handleSelectValue,
}: StepsProps) => {
  return (
    <div>
      <div>{currentSteps === 1 && name ? `Genial ${name}${text}` : text}</div>
      <div>{question}</div>
      {inputType === "text" && <input value={value} onChange={onChange} />}
      {inputType === "select" &&
        defaultValues.length > 0 &&
        defaultValues.map((item) => (
          <div
            onClick={() => handleSelectValue(item)}
            key={item}
            style={{ color: value === item ? "red" : "green" }}
          >
            {item}
          </div>
        ))}
    </div>
  );
};
