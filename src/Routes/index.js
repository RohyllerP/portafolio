import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "../App.js"

function routes() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />}/>

      </Routes>
    </Router>
  )
}

export default routes