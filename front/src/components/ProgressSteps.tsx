import "../styles/ProgressBar.css";

export const ProgressSteps = ({ currentSteps }: { currentSteps: number }) => {
  return (
    <div className="progress-bar">
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          className={`progress-step ${index < currentSteps ? "completed" : ""}`}
        ></div>
      ))}
    </div>
  );
};
