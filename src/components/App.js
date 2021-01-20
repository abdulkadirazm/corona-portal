import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import SonDurum from "../pages/SonDurum";
import Haberler from "../pages/Haberler";
import Onlemler from "../pages/Onlemler";
import Tablolar from "../pages/Tablolar";
import Dunya from "../pages/Dunya2";
import SayfaBulunamadi from "../pages/SayfaBulunamadi";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <SonDurum />
        </Route>
        <Route path="/haberler">
          <Haberler />
        </Route>
        <Route path="/onlemler">
          <Onlemler />
        </Route>
        <Route path="/tablolar">
          <Tablolar />
        </Route>
        <Route path="/dunya">
          <Dunya />
        </Route>
        <Route>
          <SayfaBulunamadi />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
