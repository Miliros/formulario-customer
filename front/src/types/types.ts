export interface StepsProps {
  currentSteps: number;
  name: string;
  text: string;
  question: string;
  inputType: string | undefined;
  defaultValues: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectValue: (item: string) => void;
  setcurrentSteps?: React.Dispatch<React.SetStateAction<number>>;
  label?: string | undefined;
  currentStepValue: string; // Nueva prop aquí
}
