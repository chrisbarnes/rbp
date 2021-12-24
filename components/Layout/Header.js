import { HeaderLinks } from "../Navigation/HeaderLinks";

export const Header = ({ items }) => {
  return (
    <div>
      <HeaderLinks links={items} />
    </div>
  );
};
