import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";

const Checkout = () => {
  const { cart } = useGlobalContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let { total } = cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        // cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        // amount: 0,
      }
    );
    setTotal(total);
  }, [cart]);

  return (
    <article className="checkout">
      <div className="order-price">
        <span className="subtotal">
          sub total<span className="subtotal-amount">${total}</span>
        </span>
        <span className="total">
          grand total<span className="total-amount pink">${total}</span>
        </span>
      </div>
      <button className="btn btn-solid-pink">proceed to checkout</button>
    </article>
  );
};

export default Checkout;
