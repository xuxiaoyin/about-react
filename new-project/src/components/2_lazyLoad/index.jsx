import React, {Component} from 'react';
import Home from './Home';
import About from './About';
import {Routes, Route, NavLink } from 'react-router-dom'

class Demo extends Component {
  render() {
    return (
        <div>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Routes>
            <Route element={<Home />}></Route>
          </Routes>
        </div>
    );
  }
}

export default Demo;
