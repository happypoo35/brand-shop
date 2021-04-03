import { useGlobalContext } from "../context";
import { useParams } from "react-router";
import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";
import Filters from "../components/catalogComponents/Filters";

const Catalog = () => {
  const pageName = "catalog";
  const { products } = useGlobalContext();
  const { gender, cat } = useParams();
  const filteredProducts = products.filter((el) =>
    cat ? el.gender === gender && el.category === cat : el.gender === gender
  );

  if (gender && filteredProducts.length < 1) {
    return (
      <>
        <PageHeader title={pageName} gender={gender} cat={cat} />
        <Filters />
        <section className="pad" aria-label="empty result">
          <div className="container">
            <h2>No matching products</h2>
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
              : products.map((el) => {
                  return <ProductCard key={el.id} {...el} />;
                })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
