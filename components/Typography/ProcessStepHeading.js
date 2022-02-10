import classNames from "clsx";

export const ProcessStepHeading = ({ stepNum, heading, isNumberRight }) => {
  const wrapClasses = classNames({
    uppercase: true,
    flex: true,
    "items-center": true,
    "-mt-12": true,
    "mb-1": true,
    "-ml-24": !isNumberRight,
    relative: true,
    "z-10": true,
    "flex-row-reverse": isNumberRight,
  });
  const numberClasses = classNames({
    "text-sage": true,
    "text-9xl": true,
    "mr-6": !isNumberRight,
    "ml-6": isNumberRight,
  });

  return (
    <h3 className={wrapClasses}>
      <span className={numberClasses}>{`0${stepNum + 1}`}</span> {heading}
    </h3>
  );
};
