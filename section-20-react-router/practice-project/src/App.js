import { Route, Routes, Navigate, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";
import react, {Suspense} from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AllQuotes = react.lazy(() => {
  import("./pages/AllQuotes");
});

const NewQuote = react.lazy(() => {
  import('./pages/NewQuote')
})

const QuoteDetails = react.lazy(() => {
  import("./pages/QuoteDetails");
})

const NotFound = react.lazy(() => {
  import("./pages/NotFound");
})

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="centered"><LoadingSpinner/></div>}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />} />
          <Route path="/quotes" element={<AllQuotes />} />
          <Route path="/quote/:quoteId" element={<QuoteDetails />}>
            {/* Nested route */}
            <Route
              path=""
              element={
                <div className="centered">
                  <Link className="btn--flat" to={`comments`}>
                    Load Comments
                  </Link>
                </div>
              }
            />
            <Route path={`comments`} element={<Comments />} />
          </Route>
          <Route path="/new-quote" element={<NewQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
