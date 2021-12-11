import { Fragment } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/meals/Meals";

function App() {
  return (
    <Fragment>
      <Header></Header>
      {/* main page content in main */}
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
