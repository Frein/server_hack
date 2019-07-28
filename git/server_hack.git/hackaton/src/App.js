import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Megafon from "./pages/megafon";
import Home from "./pages/home";
import Tinkoff from "./pages/tinkoff";
import Test from "./pages/test";

function App() {
  return (<Router>
      <div>
          <Route path="/" exact component={Home} />
          <Route path="/tinkoff/" component={Tinkoff} />
          <Route path="/megafon/" component={Megafon} />
          <Route path="/test/" component={Test} />
      </div>
  </Router>)
}

export default App;
