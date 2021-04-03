import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import ProductCard from "../ProductCard";

const Featured = () => {
  const { products } = useGlobalContext();

  return (
    <section className="featured-products pad" aria-label="featured products">
      <div className="container">
        <h2>Featured Items</h2>
        <p className="subtitle">
          Shop for items based on what we featured in this week
        </p>
        <div className="products">
          {products.map((el) => {
            if (el.isFeatured) {
              return <ProductCard key={el.id} {...el} />;
            }
            return "";
          })}
        </div>
        <Link to="/catalog">
          <button className="btn btn-pink">Browse All Product</button>
        </Link>
      </div>
    </section>
  );
};

export default Featured;
