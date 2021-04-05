import { Link } from "react-router-dom";
import Checkout from "../components/cartComponents/Checkout";
import Form from "../components/cartComponents/Form";
import PageHeader from "../components/PageHeader";
import ProductCardCart from "../components/ProductCardCart";
import { useGlobalContext } from "../context";

const Cart = () => {
  const { cart, setCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <>
        <PageHeader title="shopping cart" />
        <section className="cart-empty pad" aria-label="empty shopping cart">
          <div className="container">
            <img src="./images/icon-cart.svg" alt="img" />
            <h2 className="empty-title">Your cart is empty</h2>
            <Link to="/catalog">
              <button className="btn gray">start shopping</button>
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title="shopping cart" />
      <section className="cart pad" aria-label="cart">
        <div className="container">
          <div className="cart-items">
            {cart.map((el) => {
              return <ProductCardCart key={el.id} {...el} />;
            })}
            <div className="cart-buttons">
              <button className="btn gray" onClick={() => setCart([])}>
                clear shopping cart
              </button>
              <Link to="/catalog">
                <button className="btn gray">continue shopping</button>
              </Link>
            </div>
          </div>
          <div className="cart-controls">
            <Form />
            <Checkout />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
