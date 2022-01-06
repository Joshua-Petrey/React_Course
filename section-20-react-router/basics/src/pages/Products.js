import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">product 1</Link>
        </li>
        <li>
          <Link to="/products/p2">product 2</Link>
        </li>
        <li>
          <Link to="/products/p2">product 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
