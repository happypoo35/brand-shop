import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Select = ({ title, options }) => {
  const selectRef = useRef();
  const [showSelect, setShowSelect] = useState(false);
  const { cat } = useParams();

  useEffect(() => {
    const closeSelect = (e) => {
      if (!selectRef.current.contains(e.target)) {
        setShowSelect(false);
      }
    };
    document.addEventListener("mousedown", closeSelect);
    return () => {
      document.removeEventListener("mousedown", closeSelect);
    };
  });

  return (
    <div
      className={showSelect ? "filter-select show" : "filter-select"}
      ref={selectRef}
    >
      <span className="select-btn" onClick={() => setShowSelect(!showSelect)}>
        {title}
        <FaChevronDown />
      </span>
      <ul className="select-drop">
        {title === "gender"
          ? options.map((el, id) => {
              return (
                <li key={id} onClick={() => setShowSelect(false)}>
                  <Link to={cat ? `/catalog/${el}/${cat}` : `/catalog/${el}`}>
                    {el}
                  </Link>
                </li>
              );
            })
          : options.map((el, id) => {
              return (
                <li key={id} onClick={() => setShowSelect(false)}>
                  {el}
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default Select;
