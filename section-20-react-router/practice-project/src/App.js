import {  Redirect, Route, Switch } from "react-router-dom";
import NewQuote from "./pages/NewQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route path="/quotes">
          <AllQuotes></AllQuotes>
        </Route>
        <Route path="/new-quote">
          <NewQuote></NewQuote>
        </Route>
        <Route path="/quote/:quoteId">
          <QuoteDetails></QuoteDetails>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
