// import React, { Component } from 'react';
// import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// import Axios from 'axios';
// import ConfirmedDisplay from './components/ConfirmedDisplay';
// import RecoveredDisplay from './components/RecoveredDisplay';
// import DeathsDisplay from './components/DeathsDisplay';
// import CountrySearch from './components/CountrySearch';
// import CountryDisplay from './components/CountryDisplay';
// import Home from './screens/Home';
// import './style.css';

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.getData = this.getData.bind(this);
//   }

//   state = {
//     confirmed: 'loading',
//     recovered: 'loading',
//     deaths: 'loading',
//     countries: [],
//   };

//   componentDidMount() {
//     this.getData();
//   }

//   async getData() {
//     const defaultRes = await Axios.get('https://covid19.mathdro.id/api');
//     const countriesRes = await Axios.get(
//       'https://covid19.mathdro.id/api/countries'
//     );
//     const countries = [];
//     for (var i = 0; i < countriesRes.data.countries.length; i++) {
//       countries.push(countriesRes.data.countries[i].name);
//     }

//     this.setState({
//       confirmed: defaultRes.data.confirmed.value,
//       recovered: defaultRes.data.recovered.value,
//       deaths: defaultRes.data.deaths.value,
//       countries: countries,
//     });
//   }

//   render() {
//     return (
//       <div className='container'>
//         <h1>Corona update</h1>
//         <h6>Warning: data can be inaccurate</h6>
//         <Router basename={process.env.PUBLIC_URL}>
//           <Switch>
//             <Route exact path='/test'>
//               <div>test</div>
//             </Route>
//             <Route
//               exact
//               path='/country/:id'
//               render={(props) => <CountryDisplay {...props} />}
//             />
//             <Route
//               exact
//               path='/'
//               render={(props) => {
//                 return (
//                   <div>
//                     <CountrySearch countries={this.state.countries} />
//                     <div className='flex'>
//                       <ConfirmedDisplay value={this.state.confirmed} />
//                       <RecoveredDisplay value={this.state.recovered} />
//                       <DeathsDisplay value={this.state.deaths} />
//                     </div>
//                   </div>
//                 );
//               }}
//             />
//           </Switch>
//         </Router>
//       </div>
//     );
//   }
// }
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import CountryDisplay from './components/CountryDisplay';
import Home from './screens/Home';
import Check from './screens/CheckData';
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
        <Route path='/check' component={Check} />
      </Switch>
    </Router>
  );
}
export default App;
