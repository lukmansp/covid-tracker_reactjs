import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import ConfirmedDisplay from './ConfirmedDisplay';
import RecoveredDisplay from './RecoveredDisplay';
import DeathsDisplay from './DeathsDisplay';
import Navbar from '../screens/Navbar';
import CountrySearch from '../components/CountrySearch';
import Moment from 'react-moment';
import Confirmed from '../img/confirmed.png';
import Recovered from '../img/recovered.png';
import Death from '../img/death.png';

export default class CountryDisplay extends Component {
  state = {
    confirmed: 'loading',
    recovered: 'loading',
    deaths: 'loading',
    countries: [],
    time: '',
  };

  componentDidMount() {
    this.getResult();
  }

  async getResult() {
    try {
      const countriesRes = await Axios.get(
        'https://covid19.mathdro.id/api/countries'
      );
      const countries = [];
      for (var i = 0; i < countriesRes.data.countries.length; i++) {
        countries.push(countriesRes.data.countries[i].name);
      }

      const res = await Axios.get(
        `https://covid19.mathdro.id/api/countries/${this.props.match.params.id}`
      );
      await this.setState({
        confirmed: res.data.confirmed.value,
        recovered: res.data.recovered.value,
        deaths: res.data.deaths.value,
        countries: countries,
        time: res.data.lastUpdate,
      });
    } catch (err) {
      this.setState({
        confirmed: 'No data found',
        recovered: 'No data found',
        deaths: 'No data found',
      });
    }
  }

  render() {
    // return (
    //   <div>
    //     <Navbar />
    //     <div className='countryDisplay'>
    //       <h1>
    //         Corona update: <Moment>{this.state.timer}</Moment>
    //       </h1>
    //       <h6>Warning: data can be inacurate</h6>
    //       <h3>Country: {this.props.match.params.id}</h3>
    //       <CountrySearch countries={this.state.countries} />
    //       <div className='flex'>
    //         <ConfirmedDisplay value={this.state.confirmed} />
    //         <RecoveredDisplay value={this.state.recovered} />
    //         <DeathsDisplay value={this.state.deaths} />
    //       </div>
    //     </div>
    //   </div>
    // );
    return (
      <React.Fragment>
        <div class='jumbotron jumbotron-fluid'>
          <div className='container text-primary'></div>
        </div>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-10 info-panel'>
              <div className='row justify-content-center'>
                <h2>{this.props.match.params.id} Corona case</h2>
              </div>
              <div className='row justify-content-center'>
                <h6>
                  Updated : <Moment>{this.state.timer}</Moment>
                </h6>
              </div>
              <div className='row justify-content-center mb-3'>
                <CountrySearch countries={this.state.countries} />
              </div>
              <div className='row'>
                <div className='col-sm'>
                  <img src={Confirmed} />
                  <h5 className='mt-3'>{this.state.confirmed}</h5>
                  <h4>Confirmed</h4>
                  <p></p>
                </div>
                <div className='col-sm'>
                  <img src={Recovered} />
                  <h5 className='mt-3'>{this.state.recovered}</h5>
                  <h4>Recovered</h4>
                  <p></p>
                </div>
                <div className='col-sm'>
                  <img src={Death} />
                  <h5 className='mt-3'>{this.state.deaths}</h5>
                  <h4>Death</h4>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
