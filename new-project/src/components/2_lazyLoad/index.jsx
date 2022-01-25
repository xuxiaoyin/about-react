import React, {Component, lazy, Suspense} from 'react';
// import Home from './Home';
// import About from './About';
import Loading from './Loading';
import {Routes, Route, NavLink } from 'react-router-dom'
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

class Demo extends Component {
  render() {
    return (
        <div>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </Suspense>
        </div>
    );
  }
}

export default Demo;
