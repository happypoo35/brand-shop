import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Menu = () => {
  const { showMenu, setShowMenu } = useGlobalContext();
  const menuRef = useRef();
  const menuItems = [
    {
      title: "men",
      links: ["Accessories", "Bags", "Denim", "T-Shirts"],
    },
    {
      title: "women",
      links: ["Accessories", "Jackets & Coats", "Polos", "T-Shirts", "Shirts"],
    },
    {
      title: "kids",
      links: [
        "Accessories",
        "Jackets & Coats",
        "Polos",
        "T-Shirts",
        "Shirts",
        "Bags",
      ],
    },
  ];

  useEffect(() => {
    const closeMenu = (e) => {
      if (
        !menuRef.current.contains(e.target) &&
        e.target.classList[0] !== "hamburger"
      ) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  });

  return (
    <section className={showMenu ? "menu show" : "menu"} ref={menuRef}>
      <img
        src="./images/icon-close.svg"
        alt="close"
        className="btn-close"
        onClick={() => setShowMenu(false)}
      />
      <h6>menu</h6>
      <nav className="nav">
        {menuItems.map((menuItem, id) => (
          <div key={id} className="nav-block">
            <Link
              to={`/catalog/${menuItem.title}`}
              onClick={() => setShowMenu(false)}
            >
              <h6 className="pink">{menuItem.title}</h6>
            </Link>
            {menuItem.links.map((link, index) => (
              <Link
                key={index}
                className="nav-link"
                to={`/catalog/${menuItem.title}/${link}`}
                onClick={() => setShowMenu(false)}
              >
                {link}
              </Link>
            ))}
          </div>
        ))}
        <Link to="/catalog" onClick={() => setShowMenu(false)}>
          <h6 className="pink">all products</h6>
        </Link>
      </nav>
    </section>
  );
};

export default Menu;
