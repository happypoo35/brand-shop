import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Registration from "./pages/Registration";
import Error from "./pages/Error";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="wrapper">
        <Header />
        <main>
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/catalog" component={Catalog} />
            <Route exact path="/catalog/:gender" component={Catalog} />
            <Route path="/catalog/:gender/:cat" component={Catalog} />
            <Route exact path="/product/:id" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/registration" component={Registration} />
            <Route path="*" component={Error} />
          </Switch>
        </main>
        <Cta />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
