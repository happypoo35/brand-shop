import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Header = () => {
  const { showMenu, setShowMenu, cart } = useGlobalContext();

  return (
    <header className="header pad">
      <div className="container">
        <Link to="/" aria-label="home page">
          <img src="./images/logo.svg" alt="logo" className="logo" />
        </Link>
        <div className="search">
          <img src="./images/icon-search.svg" alt="search" />
        </div>
        <div className="header-panel">
          <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
            <img src="./images/icon-hamburger.svg" alt="menu" />
          </div>
          <Link to="/registration" aria-label="user">
            <img
              src="./images/icon-profile.svg"
              alt="profile"
              className="profile"
            />
          </Link>
          <Link to="/shopping cart" aria-label="cart">
            <div className="cart-icon">
              <img src="./images/icon-cart.svg" alt="cart" />
              {cart.length > 0 ? (
                <span className="cart-number">{cart.length}</span>
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
