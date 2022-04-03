import { Product } from "./Product";

export const Products = ({ products }) => {
  return (
    <div className="sm:flex flex-wrap">
      {products.map((product, index) => (
        <div className="basis-1/2 shrink grow-0" key={`product-${index}`}>
          <Product {...product} />
        </div>
      ))}
    </div>
  );
};
