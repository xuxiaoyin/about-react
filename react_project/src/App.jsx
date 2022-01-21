import React, {Component} from 'react';
import { Routes, Route, Redirect } from 'react-router-dom'
import routes from './config/routes'
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
        <Routes>
          {
            routes.map(routeObj => {
              return <Route key={routeObj.path} path={routeObj.path} element={<routeObj.component />}  />
            })
          }
          <Route path="*" element={<Login />} />
        </Routes>
    );
  }
}

export default App;
