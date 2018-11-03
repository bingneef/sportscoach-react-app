import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.sass';
import Navigation from './components/navigation';
import Item from './components/example/context';
import { Provider } from './contexts/person';

const Immer = lazy(() => import('./components/example/immer'));

const Index = () => <h2>Home</h2>;

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Navigation />
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="" exact component={Index} />
              <Route path="/about/" component={props => <Immer {...props} />} />
              <Route path="/users/" component={Item} />
            </Suspense>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
