import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { AiOutlineCheckCircle } from "react-icons/ai";

const ProductCard = ({ id, img, title, text, price }) => {
  const { addToCart } = useGlobalContext();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(id);
    setAdded(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdded(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [added]);

  return (
    <article className="product-card" aria-label="product">
      <div className="product-card-img">
        <img src={img} alt="img" />
        <div className="div card-hover">
          {!added ? (
            <button className="btn btn-cart" onClick={handleClick}>
              <img src="./images/icon-cart.svg" alt="img" />
              Add to Cart
            </button>
          ) : (
            <button className="btn btn-cart btn-cart-added">
              <AiOutlineCheckCircle />
              Added
            </button>
          )}
        </div>
      </div>
      <Link to={`/product/${id}`}>
        <div className="product-card-info">
          <h4>{title}</h4>
          <p>{text}</p>
          <span className="card-price pink">{`$${price}.00`}</span>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
