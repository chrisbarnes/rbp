import { ProcessStep } from "./ProcessStep";

export const Process = ({ steps }) => {
  return (
    <div className="mb-28">
      {steps.map((step, index) => (
        <ProcessStep key={index} stepNum={index} {...step} />
      ))}
    </div>
  );
};
