import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Quantity from "./Quantity";

const ProductCardCart = ({ img, title, price, amount, id }) => {
  const { cart, setCart } = useGlobalContext();
  const [quantity, setQuantity] = useState(amount);
  const [calcPrice, setCalcPrice] = useState(price);

  useEffect(() => {
    setCart(
      cart.map((el) => {
        if (el.id === id) {
          return { ...el, amount: quantity };
        }
        return el;
      })
    );
    setCalcPrice(price * quantity);
  }, [quantity, price]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <article className="cart-item">
      <div className="cart-item-img">
        <img src={img} alt={title} />
      </div>
      <div className="cart-item-content">
        <div className="cart-item-header">
          <Link to={`/product/${id}`}>
            <h3 className="cart-item-title">{title}</h3>
          </Link>
          <GrClose onClick={() => setCart(cart.filter((el) => el.id !== id))} />
        </div>
        <ul className="cart-item-options">
          <li>
            Price: <span className="pink">${calcPrice}.00</span>
          </li>
          <li>Color: Red</li>
          <li>Size: XL</li>
        </ul>
        <Quantity quantity={quantity} setQuantity={setQuantity} />
      </div>
    </article>
  );
};

export default ProductCardCart;
