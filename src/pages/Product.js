import { useState } from "react";
import { useParams } from "react-router";
import { useGlobalContext } from "../context";
import { ReactComponent as CartIcon } from "./icon-cart.svg";
import PageHeader from "../components/PageHeader";
import Select from "../components/Select";
import Quantity from "../components/Quantity";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const { products } = useGlobalContext();
  const { id } = useParams();
  const product = products[id - 1];
  const { category, gender, img, price, longText, title } = product;
  const selects = [
    {
      title: "choose color",
      options: ["white", "gray", "black"],
    },
    {
      title: "choose size",
      options: ["xs", "s", "m", "l", "xl"],
    },
  ];

  return (
    <>
      <PageHeader title="catalog" gender={gender} cat={category} />
      <header className="product-header pad">
        <div className="container">
          <img src={img} alt={title} />
        </div>
      </header>
      <section className="product-page pad">
        <div className="container">
          <div className="product-page-info">
            <div className="info-container">
              <header className="info-header">
                <h6 className="pink">{gender} collection</h6>
                <h5>{title}</h5>
                <p>{longText}</p>
                <span className="product-price pink">${price}.00</span>
              </header>
              <div className="info-selects">
                {selects.map((el, id) => {
                  return <Select key={id} {...el} />;
                })}
                <Quantity quantity={quantity} setQuantity={setQuantity} />
              </div>
              <button className="btn btn-cart-product">
                <CartIcon />
                Add to Cart
              </button>
            </div>
          </div>
          <div className="products">
            {products.map((el, id) => {
              if (id < 3) {
                return <ProductCard key={el.id} {...el} />;
              }
              return "";
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
