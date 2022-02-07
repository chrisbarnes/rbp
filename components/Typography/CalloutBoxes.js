import { CalloutBox } from "./CalloutBox";

export const CalloutBoxes = ({ items }) => {
  return (
    <div className="mb-28 flex">
      {items.map((item, index) => (
        <CalloutBox key={index} {...item} />
      ))}
    </div>
  );
};
