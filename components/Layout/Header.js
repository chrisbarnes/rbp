import { HeaderLinks } from "../Navigation/HeaderLinks";

export const Header = ({ items }) => {
  return (
    <div>
      <HeaderLinks links={items} />
      <p>image here eventually</p>
    </div>
  );
};
