import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import {PrivateRoute}from './util/privateRoute'
import BubblePage from './components/BubblePage'
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path='/bubble-page' component={BubblePage} updateColor={setColorList}/>
      </div>
    </Router>
  );
}

export default App;
