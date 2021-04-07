import { useGlobalContext } from "../context";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";
import Filters from "../components/catalogComponents/Filters";
import { useState } from "react";

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const pageName = "catalog";
  const { products } = useGlobalContext();
  const { gender, cat } = useParams();
  const filteredProducts = products.filter((el) =>
    cat ? el.gender === gender && el.category === cat : el.gender === gender
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const currentProducts = products.slice(0, indexOfLastProduct);

  if (gender && filteredProducts.length < 1) {
    return (
      <>
        <PageHeader title={pageName} gender={gender} cat={cat} />
        <Filters />
        <section className="catalog-empty pad" aria-label="empty result">
          <div className="container">
            <h2 className="empty-title">No matching products</h2>
            <Link to="/catalog">
              <button className="btn gray">back to catalog</button>
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title={pageName} gender={gender} cat={cat} />
      <Filters />
      <section className={`${pageName} pad`} aria-label={pageName}>
        <div className="container">
          <div className="products">
            {gender
              ? filteredProducts.map((el) => {
                  return <ProductCard key={el.id} {...el} />;
                })
              : currentProducts.map((el) => {
                  return <ProductCard key={el.id} {...el} />;
                })}
          </div>
          {!gender && currentProducts.length < products.length ? (
            <button
              className="btn gray"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Show more
            </button>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

export default Catalog;
