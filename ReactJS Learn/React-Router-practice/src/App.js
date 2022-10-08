import { Route, Switch, Link, Redirect, NavLink } from "react-router-dom";
import Quotes from "./components/pages/Quotes";
import NotFound from "./components/pages/NotFound";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";
import Navigation from "./components/UI/NavigationHeader";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Navigation />
      <Route path='/' exact>
        <Redirect to='/quotes'></Redirect>
      </Route>
      <Switch>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quotesId'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
