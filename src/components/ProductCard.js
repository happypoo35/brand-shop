const ProductCard = ({ img, title, text, price }) => {
  return (
    <article className="product-card" aria-label="product">
      <div className="product-card-img">
        <img src={img} alt="img" />
        <div className="div card-hover">
          <button className="btn btn-cart">
            <img src="./images/icon-cart.svg" alt="img" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="product-card-info">
        <h4>{title}</h4>
        <p>{text}</p>
        <span className="card-price pink">{`$${price}.00`}</span>
      </div>
    </article>
  );
};

export default ProductCard;
