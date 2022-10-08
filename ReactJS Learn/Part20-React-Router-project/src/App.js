import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Welcome from "./pages/welcome";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <div>
      <MainHeader />
      <Route path='/' exact>
        <Redirect to='/welcome' />
      </Route>
      <Switch>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/products' exact>
          <Product />
        </Route>
        <Route path='/products/:productId'>
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
