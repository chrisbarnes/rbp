import { CalloutBox } from "./CalloutBox";

export const CalloutBoxes = ({ items }) => {
  return (
    <div className="mb-28 flex flex-col md:flex-row">
      {items.map((item, index) => (
        <CalloutBox key={index} {...item} />
      ))}
    </div>
  );
};
