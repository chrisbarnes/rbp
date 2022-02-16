import { ProcessStep } from "./ProcessStep";
import { Button } from "../Button/Button";
import Link from "next/link";

export const Process = ({ steps }) => {
  return (
    <div className="mb-28">
      {steps.map((step, index) => (
        <ProcessStep key={index} stepNum={index} {...step} />
      ))}
      <div className="text-center mt-40">
        <Link href={`/contact`} passHref>
          <Button type="link" size="large">
            Let&apos;s chat about your family
          </Button>
        </Link>
      </div>
    </div>
  );
};
