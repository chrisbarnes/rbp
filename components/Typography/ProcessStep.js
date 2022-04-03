import Image from "next/image";
import { ProcessStepHeading } from "./ProcessStepHeading";
import classNames from "clsx";

export const ProcessStep = ({ stepNum, heading, description, image }) => {
  // Force webp as the default image format here
  // let imageSrc = `https:${image.url}?fm=webp`;

  // Use a super low quality jpg as the blur data url
  // let blurSrc = `https:${image.url}?fm=jpg&q=1`;
  const isEvenStep = (stepNum + 1) % 2 === 0;
  const wrapperClasses = classNames({
    flex: true,
    "flex-row-reverse": isEvenStep,
    "-mt-48": stepNum === 1,
    "-mt-24": stepNum === 2,
    "-mt-36": stepNum === 3,
    "items-end": stepNum === 3,
  });
  const imageContainerClasses = classNames({
    "max-w-sm": stepNum < 3,
    "max-w-3xl": stepNum === 3,
    "basis-4/12": stepNum < 3,
    "basis-7/12": stepNum === 3,
    "mr-14": !isEvenStep,
    "ml-14": isEvenStep,
  });
  const textWrapperClasses = classNames({
    "-mr-24": isEvenStep,
    "-mb-20": stepNum === 3,
  });
  const textClasses = classNames({
    "text-xl": true,
    "max-w-2xl": stepNum === 0,
    "max-w-xs": isEvenStep,
    "max-w-sm": stepNum > 1,
    "pr-4": isEvenStep,
    "mr-16": isEvenStep,
  });

  return (
    <div className={wrapperClasses}>
      <div className={imageContainerClasses}>
        <Image
          alt={image.title}
          src={image.url}
          layout="responsive"
          width={image.width}
          height={image.height}
          // placeholder="blur"
          // blurDataURL={blurSrc}
        />
      </div>
      <div className={textWrapperClasses}>
        <ProcessStepHeading stepNum={stepNum} heading={heading} isNumberRight={isEvenStep} />
        <p className={textClasses}>{description}</p>
      </div>
    </div>
  );
};
