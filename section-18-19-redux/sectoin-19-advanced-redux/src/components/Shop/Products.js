import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "a book",
    price: 6,
    description: "A book I wrote",
  },
  {
    id: "p2",
    title: "toy",
    price: 2,
    description: "A childs toy",
  },
  {
    id: "p3",
    title: "towel",
    price: 44,
    description: "A beach towel",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={Math.random()}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
