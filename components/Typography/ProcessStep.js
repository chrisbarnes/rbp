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
    "flex-col": true,
    "md:flex-row": true,
    "md:flex-row-reverse": isEvenStep,
    "md:-mt-48": stepNum === 1,
    "md:-mt-24": stepNum === 2,
    "md:-mt-36": stepNum === 3,
    "items-end": stepNum === 3,
  });
  const imageContainerClasses = classNames({
    "md:max-w-sm": stepNum < 3,
    "max-w-3xl": stepNum === 3,
    "basis-4/12": stepNum < 3,
    "basis-7/12": stepNum === 3,
    "md:mr-14": !isEvenStep,
    "md:ml-14": isEvenStep,
    "mb-14": true,
    "md:mb-0": true,
  });
  const textWrapperClasses = classNames({
    "md:-mr-24": isEvenStep,
    "md:-mb-20": stepNum === 3,
  });
  const textClasses = classNames({
    "text-xl": true,
    "max-w-2xl": stepNum === 0,
    "md:max-w-xs": isEvenStep,
    "md:max-w-sm": stepNum > 1,
    "pr-4": isEvenStep,
    "px-4": true,
    "md:mr-16": isEvenStep,
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
