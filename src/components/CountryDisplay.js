import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import CountrySearch from '../components/CountrySearch';
import Moment from 'react-moment';
import Confirmed from '../img/confirmed.png';
import Recovered from '../img/recovered.png';
import Death from '../img/death.png';
import Modal from '../components/ModalCek';
import Map from '../components/Map';

import deathGlobal from '../img/deathGlobal.png';
import recoveredGlobal from '../img/recoveredGlobal.png';
import confirmedGlobal from '../img/confirmedGlobal.png';
export default class CountryDisplay extends Component {
  state = {
    confirmed: 'loading',
    recovered: 'loading',
    deaths: 'loading',
    countries: [],
    indConfirmed: '',
    indRecovered: '',
    indDeath: '',
    indTime: '',
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
      const ind = await Axios.get(
        'https://covid19.mathdro.id/api/countries/indonesia'
      );
      const res = await Axios.get(
        `https://covid19.mathdro.id/api/countries/${this.props.match.params.id}`
      );
      await this.setState({
        confirmed: res.data.confirmed.value,
        recovered: res.data.recovered.value,
        deaths: res.data.deaths.value,
        countries: countries,
        indConfirmed: ind.data.confirmed.value,
        indRecovered: ind.data.recovered.value,
        indDeath: ind.data.deaths.value,
        indTime: ind.data.lastUpdate,
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
                <h2>Indonesia Corona case</h2>
              </div>
              <div className='row justify-content-center'>
                <h6>
                  Updated : <Moment>{this.state.timer}</Moment>
                </h6>
              </div>
              <div className='row'>
                <div className='col-sm'>
                  <img src={Confirmed} />
                  <h5 className='mt-3'>{this.state.indConfirmed}</h5>
                  <h4>Confirmed</h4>
                  <p></p>
                </div>
                <div className='col-sm'>
                  <img src={Recovered} />
                  <h5 className='mt-3'>{this.state.indRecovered}</h5>
                  <h4>Recovered</h4>
                  <p></p>
                </div>
                <div className='col-sm'>
                  <img src={Death} />
                  <h5 className='mt-3'>{this.state.indDeath}</h5>
                  <h4>Death</h4>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* global */}
        <div class='row workingspace bg-light p-4 mt-5'>
          <div class='col-lg-6'>
            <Map />
          </div>
          <div class='col-lg-6'>
            <div className='row justify-content-center'>
              <h5>
                <strong>{this.props.match.params.id} Corona case</strong>
              </h5>
              <span className='ml-5'>
                <Link to='/corona'>Refresh</Link>
              </span>
            </div>
            <div className='row justify-content-center mb-2'>
              <h6>
                Updated : <Moment>{this.state.indTime}</Moment>
              </h6>
            </div>
            <div className='row justify-content-center mb-5'>
              <CountrySearch countries={this.state.countries} />
            </div>
            <div className='row mb-3'>
              <div className='col-sm'>
                <img src={confirmedGlobal} />
                <h6 className='mt-3'>
                  <strong>{this.state.confirmed}</strong>
                </h6>
                <h5>Confirmed</h5>
                <p></p>
              </div>
              <div className='col-sm'>
                <img src={recoveredGlobal} />
                <h6 className='mt-3'>
                  <strong>{this.state.recovered}</strong>
                </h6>
                <h5>Recovered</h5>
                <p></p>
              </div>
              <div className='col-sm'>
                <img src={deathGlobal} />
                <h6 className='mt-3'>
                  <strong>{this.state.deaths}</strong>
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

        {/* Modal */}
        <Modal />
      </React.Fragment>
    );
  }
}
