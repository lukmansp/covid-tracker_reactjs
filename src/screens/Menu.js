import React, { Component } from 'react';
import Axios from 'axios';
import Moment from 'react-moment';
import ConfirmedImg from '../img/confirmed.png';
import RecoveredImg from '../img/recovered.png';
import DeathImg from '../img/death.png';
import CountrySearch from '../components/CountrySearch';
import Confirm from '../components/ConfirmedDisplay.js';
import Mapimage from '../img/workingspace.png';
import deathGlobal from '../img/deathGlobal.png';
import recoveredGlobal from '../img/recoveredGlobal.png';
import confirmedGlobal from '../img/confirmedGlobal.png';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }
  state = {
    timer: '',
    confirmed: 'loading',
    recovered: 'loading',
    deaths: 'loading',
    globalConfirm: 'loading',
    globalRecovered: 'loading',
    globalDeath: 'loading',
    globalTimer: 'loading',
    countries: [],
  };
  componentDidMount() {
    this.getData();
  }
  async getData() {
    const defaultRes = await Axios.get(
      'https://covid19.mathdro.id/api/countries/indonesia'
    );
    const globalRes = await Axios.get('https://covid19.mathdro.id/api');
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
      globalConfirm: globalRes.data.confirmed.value,
      globalRecovered: globalRes.data.recovered.value,
      globalDeath: globalRes.data.deaths.value,
      globalTimer: globalRes.data.lastUpdate,
      countries: countries,
    });
  }
  render(props) {
    console.log(this.state);
    return (
      <React.Fragment>
        <div class='jumbotron jumbotron-fluid'>
          <div className='container text-primary'>
            {/* <h1 class='display-4 '>Stay with home!</h1>
          <p class='lead'>Safe our world together</p>
          <a class='btn btn-primary btn-lg' href='#' role='button'>
            Learn more
          </a> */}
          </div>
        </div>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-10 info-panel'>
              <div className='row justify-content-center'>
                <h2>Indonesia Corona case</h2>
              </div>
              <div className='row justify-content-center'>
                <h6>
                  Updated : <Moment>{this.state.timer}</Moment>
                </h6>
              </div>
              <div className='row'>
                <div className='col-sm'>
                  <img src={ConfirmedImg} />
                  <Confirm value={this.state.confirmed} />
                  <h4>Confirmed</h4>
                  <p></p>
                </div>
                <div className='col-sm'>
                  <img src={RecoveredImg} />
                  <h5 className='mt-3'>{this.state.recovered}</h5>
                  <h4>Recovered</h4>
                  <p></p>
                </div>
                <div className='col-sm'>
                  <img src={DeathImg} />
                  <h5 className='mt-3'>{this.state.deaths}</h5>
                  <h4>Death</h4>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div class='row workingspace'>
            <div class='col-lg-6'>
              <img src={Mapimage} alt='Working Space' class='img-fluid' />
            </div>
            <div class='col-lg-6'>
              <div className='row justify-content-center'>
                <h5>Global Corona case</h5>
              </div>
              <div className='row justify-content-center mb-5'>
                <h6>
                  Updated : <Moment>{this.state.globalTimer}</Moment>
                </h6>
              </div>
              <div className='row justify-content-center mb-5'>
                <CountrySearch countries={this.state.countries} />
              </div>
              <div className='row mb-5'>
                <div className='col-sm'>
                  <img src={confirmedGlobal} />
                  <h5 className='mt-3'>{this.state.globalConfirm}</h5>
                  <h4>Confirmed</h4>
                  <p></p>
                </div>
                <div className='col-sm'>
                  <img src={recoveredGlobal} />
                  <h5 className='mt-3'>{this.state.globalRecovered}</h5>
                  <h4>Recovered</h4>
                  <p></p>
                </div>
                <div className='col-sm'>
                  <img src={deathGlobal} />
                  <h5 className='mt-3'>{this.state.globalDeath}</h5>
                  <h4>Death</h4>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* global corona */}
      </React.Fragment>
    );
  }
}
export default Menu;
