import { useGlobalContext } from "../context";
import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router";

const Catalog = () => {
  const pageName = "catalog";
  const { products } = useGlobalContext();
  const { gender, cat } = useParams();

  return (
    <>
      <PageHeader title={pageName} gender={gender} cat={cat} />
      <section className={`${pageName} pad`} aria-label={pageName}>
        <div className="container">
          <div className="products">
            {products.map((el) => {
              return <ProductCard key={el.id} {...el} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
