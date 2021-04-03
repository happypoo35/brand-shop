import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as FilterIcon } from "./icon-filter.svg";

const Filter = () => {
  const filterRef = useRef();
  const [showFilter, setShowFilter] = useState(false);
  const categories = [
    "Accessories",
    "Bags",
    "Denim",
    "Hoodies & Sweatshirts",
    "Jackets & Coats",
    "Polos",
    "Shirts",
    "Shoes",
    "Sweaters & Knits",
    "T-Shirts",
    "Tanks",
  ];
  const { gender } = useParams();

  useEffect(() => {
    const closeFilter = (e) => {
      if (!filterRef.current.contains(e.target)) {
        setShowFilter(false);
      }
    };
    document.addEventListener("mousedown", closeFilter);
    return () => {
      document.removeEventListener("mousedown", closeFilter);
    };
  });

  return (
    <div className={showFilter ? "filter active" : "filter"} ref={filterRef}>
      <span className="filter-btn" onClick={() => setShowFilter(!showFilter)}>
        filter
        <FilterIcon />
      </span>
      <div className="filter-drop">
        <div className="filter-section">
          <h6 className="filter-title pink">category</h6>
        </div>
        <ul className="cat-list">
          {categories.map((el, id) => (
            <li key={id} onClick={() => setShowFilter(false)}>
              <Link
                className="cat-link"
                to={`/catalog/${gender ? gender : "men"}/${el}`}
              >
                {el}
              </Link>
            </li>
          ))}
        </ul>
        <div className="filter-section">
          <h6 className="filter-title">brand</h6>
        </div>
        <div className="filter-section">
          <h6 className="filter-title">designer</h6>
        </div>
      </div>
    </div>
  );
};

export default Filter;
