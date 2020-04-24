import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryDisplay from './components/CountryDisplay';
import Menu from './screens/Menu';
import './style.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/country/:id'
          render={(props) => <CountryDisplay {...props} />}
        />
        <Route exact path='/corona' component={Menu} />
      </Switch>
    </Router>
  );
}
export default App;
