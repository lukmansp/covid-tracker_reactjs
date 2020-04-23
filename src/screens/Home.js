import React, { Component } from 'react';
import Axios from 'axios';
import ConfirmedDisplay from '../components/ConfirmedDisplay';
import RecoveredDisplay from '../components/RecoveredDisplay';
import DeathsDisplay from '../components/DeathsDisplay';
import CountrySearch from '../components/CountrySearch';
import CountryDisplay from '../components/CountryDisplay';
import Moment from 'react-moment';
import Navbar from './Navbar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }
  state = {
    timer: '',
    confirmed: 'loading',
    recovered: 'loading',
    deaths: 'loading',
    countries: [],
  };
  componentDidMount() {
    this.getData();
  }
  async getData() {
    const defaultRes = await Axios.get('https://covid19.mathdro.id/api');
    const countriesRes = await Axios.get(
      'https://covid19.mathdro.id/api/countries'
    );
    const countries = [];
    for (var i = 0; i < countriesRes.data.countries.length; i++) {
      countries.push(countriesRes.data.countries[i].name);
    }

    this.setState({
      timer: defaultRes.data.lastUpdate,
      confirmed: defaultRes.data.confirmed.value,
      recovered: defaultRes.data.recovered.value,
      deaths: defaultRes.data.deaths.value,
      countries: countries,
    });
  }
  render = (props) => {
    console.log('ini home', this.state.timer);
    return (
      <div>
        <Navbar />
        <div className='container'>
          <h1>
            Corona update: <Moment>{this.state.timer}</Moment>
          </h1>
          <h6>Warning: data can be inacurate</h6>
          <CountrySearch countries={this.state.countries} />
          <div className='flex'>
            <ConfirmedDisplay value={this.state.confirmed} />
            <RecoveredDisplay value={this.state.recovered} />
            <DeathsDisplay value={this.state.deaths} />
          </div>
        </div>
      </div>
    );
  };
}
export default Home;
