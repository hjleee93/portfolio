import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hyolo from "./Projects/Hyolo";
import Header from "./Common/Header"
import Home from "./Home"

// App.js에 있던 Aladin, LionKing, SpiderMan을
// Components/Routes.js 로 이동
export default () => (
     <Router>
          <Header />
          <Route path="/hyolo" component={Hyolo} />
          <Route path="/home" component={Home} />

     </Router>
)