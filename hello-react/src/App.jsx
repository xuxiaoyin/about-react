import React, {Component} from 'react';
import Serrch from "./components/Search";
import List from "./components/List";

class App extends Component {
  render() {
    return (
        <div className="container">
          <Serrch />
          <List />
        </div>
    );
  }
}

export default App;
