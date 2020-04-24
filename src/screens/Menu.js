import React, { Component } from 'react';
import Axios from 'axios';
import Moment from 'react-moment';
import DeathImg from '../img/death.png';
import CountrySearch from '../components/CountrySearch';
import Modal from '../components/ModalCek';
import Map from '../components/Map';

import ConfirmedImg from '../img/confirmed.png';
import RecoveredImg from '../img/recovered.png';
import deathGlobal from '../img/deathGlobal.png';
import recoveredGlobal from '../img/recoveredGlobal.png';
import confirmedGlobal from '../img/confirmedGlobal.png';
class Menu extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

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
          <div className='container text-primary'></div>
        </div>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-10 info-panel'>
              <div className='row justify-content-center'>
                <h2>
                  <strong>Indonesia Corona case</strong>
                </h2>
              </div>
              <div className='row justify-content-center'>
                <h6>
                  Updated : <Moment>{this.state.timer}</Moment>
                </h6>
              </div>
              <div className='row'>
                <div className='col-sm'>
                  <img src={ConfirmedImg} />
                  <h5 className='mt-3'>{this.state.confirmed}</h5>
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
        </div>
        <div class='row workingspace bg-light p-4 mt-5'>
          <div class='col-lg-6'>
            <Map />
          </div>
          <div class='col-lg-6'>
            <div className='row justify-content-center'>
              <h5>
                <strong>Global Corona case</strong>
              </h5>
            </div>
            <div className='row justify-content-center mb-5'>
              <h6>
                Updated : <Moment>{this.state.globalTimer}</Moment>
              </h6>
            </div>
            <div className='row justify-content-center mb-5'>
              <CountrySearch countries={this.state.countries} />
            </div>
            <div className='row mb-3'>
              <div className='col-sm'>
                <img src={confirmedGlobal} />
                <h6 className='mt-3'>
                  <strong>{this.state.globalConfirm}</strong>
                </h6>
                <h5>Confirmed</h5>
                <p></p>
              </div>
              <div className='col-sm'>
                <img src={recoveredGlobal} />
                <h6 className='mt-3'>
                  <strong>{this.state.globalRecovered}</strong>
                </h6>
                <h5>Recovered</h5>
                <p></p>
              </div>
              <div className='col-sm'>
                <img src={deathGlobal} />
                <h6 className='mt-3'>
                  <strong>{this.state.globalDeath}</strong>
                </h6>
                <h5>Death</h5>
                <p></p>
              </div>
            </div>
            <div className='row justify-content-center'>
              <button
                type='button'
                class='btn btn-primary'
                data-toggle='modal'
                data-target='#exampleModal'
              >
                Cek your condition
              </button>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='row my-4'>
            <p>
              <strong>
                "Distance means so little, when life means so much"
              </strong>
            </p>
          </div>
        </div>
        <Modal />
      </React.Fragment>
    );
  }
}
export default Menu;
