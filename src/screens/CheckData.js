import React, { Component } from 'react';
import Navbar from './Navbar';
import { Alert, Button } from 'react-bootstrap';
class CheckData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      checked2: false,
      checked3: false,
      checked4: false,
      result: 0,
      visible: false,
    };
  }
  handleCheckedChange() {
    const bool = this.state.checked;
    this.setState({
      checked: !this.state.checked,
    });
    if (bool === false) {
      this.setState({
        result: this.state.result + 1,
      });
    } else if (bool === true) {
      this.setState({
        result: this.state.result - 1,
      });
    }
  }
  handleCheckedChange2() {
    const bool = this.state.checked2;
    this.setState({
      checked2: !this.state.checked2,
    });
    if (bool === false) {
      this.setState({
        result: this.state.result + 1,
      });
    } else if (bool === true) {
      this.setState({
        result: this.state.result - 1,
      });
    }
  }
  handleCheckedChange3() {
    const bool = this.state.checked3;
    this.setState({
      checked3: !this.state.checked3,
    });
    if (bool === false) {
      this.setState({
        result: this.state.result + 1,
      });
    } else if (bool === true) {
      this.setState({
        result: this.state.result - 1,
      });
    }
  }
  handleCheckedChange4() {
    const bool = this.state.checked4;
    this.setState({
      checked4: !this.state.checked4,
    });
    if (bool === false) {
      this.setState({
        result: this.state.result + 1,
      });
    } else if (bool === true) {
      this.setState({
        result: this.state.result - 1,
      });
    }
  }
  toggle = (e) => {
    const res = this.state.result;
    e.preventDefault();
    if (res > 2) {
      alert('sukses');
    }
  };
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <form>
            <p>status: {this.state.checked ? 'false' : 'true'}</p>

            <input
              type='checkbox'
              checked={this.state.checked}
              onChange={this.handleCheckedChange.bind(this)}
              hi
              im
              alertr
            />
            <input
              type='checkbox'
              checked={this.state.checked2}
              onChange={this.handleCheckedChange2.bind(this)}
            />
            <input
              type='checkbox'
              checked={this.state.checked3}
              onChange={this.handleCheckedChange3.bind(this)}
            />
            <input
              type='checkbox'
              checked={this.state.checked4}
              onChange={this.handleCheckedChange4.bind(this)}
            />
            <Button type='submit' onClick={this.toggle}>
              cek data
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
export default CheckData;
