import DottedLine from "../../public/images/horizontal-dots-white.svg";

export const CalloutBox = ({ heading, description }) => {
  return (
    <div className="bg-plum text-white even:bg-lightPurple even:text-darkPurple last:bg-darkPurple py-10 px-8 text-center">
      <h4
        className="text-4xl mb-11 pb-7 bg-no-repeat bg-bottom mx-auto"
        style={{
          maxWidth: "236px",
          backgroundImage: `url("${DottedLine.src}")`,
          backgroundSize: "176px 2px",
        }}
      >
        {heading}
      </h4>
      <div className="text-2xl uppercase leading-9">{description}</div>
    </div>
  );
};
