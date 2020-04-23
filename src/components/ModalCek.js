import React, { Component } from 'react';

class ModalCek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      btn: '',
      btnValue: '',
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
        btn: 'btn btn-warning',
        btnValue: 'warning',
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
        btn: 'btn btn-warning',
        btnValue: 'warning',
      });
    } else if (bool === true) {
      this.setState({
        result: this.state.result - 1,
      });
    }
  }
  handleCheckedChange5() {
    const bool = this.state.checked5;
    this.setState({
      checked5: !this.state.checked5,
    });
    if (bool === false) {
      this.setState({
        result: this.state.result + 1,
        btn: 'btn btn-danger',
        btnValue: 'danger',
      });
    } else if (bool === true) {
      this.setState({
        result: this.state.result - 1,
      });
    }
  }
  handleCheckedChange6() {
    const bool = this.state.checked6;
    this.setState({
      checked6: !this.state.checked6,
    });
    if (bool === false) {
      this.setState({
        result: this.state.result + 1,
        btn: 'btn btn-danger',
        btnValue: 'danger',
      });
    } else if (bool === true) {
      this.setState({
        result: this.state.result - 1,
      });
    }
  }
  handleCheckedChange7() {
    const bool = this.state.checked7;
    this.setState({
      checked7: !this.state.checked7,
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
    if (res > 2 && res < 4) {
      alert('your condition is warning');
    } else if (res > 4) {
      alert(
        'your conditions is in danger please check to hospital immediately'
      );
    }
  };

  render() {
    console.log('ini status', this.state.btn);
    return (
      <div
        class='modal fade'
        id='exampleModal'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Cheking conditions
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              {' '}
              <form>
                <p>
                  <button className='btn btn-light'>
                    <strong>status : </strong>
                  </button>
                  <button className={this.state.btn}>
                    {this.state.btnValue}
                  </button>
                </p>
                <div class='input-group mb-3'>
                  <div class='input-group-prepend'>
                    <div class='input-group-text'>
                      <input
                        type='checkbox'
                        checked={this.state.checked}
                        onChange={this.handleCheckedChange.bind(this)}
                      />
                    </div>
                  </div>
                  <input
                    type='text'
                    class='form-control'
                    readOnly
                    value='Apakah kamu bepergian keluar kota di 2 minggu akhir ini?'
                  />
                </div>
                <div class='input-group mb-3'>
                  <div class='input-group-prepend'>
                    <div class='input-group-text'>
                      <input
                        type='checkbox'
                        checked={this.state.checked2}
                        onChange={this.handleCheckedChange2.bind(this)}
                      />
                    </div>
                  </div>
                  <input
                    type='text'
                    value='Apakah kamu merasa napasmu sesak?'
                    class='form-control'
                    readOnly
                  />
                </div>
                <div class='input-group mb-3'>
                  <div class='input-group-prepend'>
                    <div class='input-group-text'>
                      <input
                        type='checkbox'
                        checked={this.state.checked3}
                        onChange={this.handleCheckedChange3.bind(this)}
                      />
                    </div>
                  </div>
                  <input
                    type='text'
                    class='form-control'
                    readOnly
                    value='Apakah kamu terkena flu atau batuk kering?'
                  />
                </div>

                <div class='input-group mb-3'>
                  <div class='input-group-prepend'>
                    <div class='input-group-text'>
                      <input
                        type='checkbox'
                        checked={this.state.checked4}
                        onChange={this.handleCheckedChange4.bind(this)}
                      />
                    </div>
                  </div>
                  <input
                    type='text'
                    class='form-control'
                    value='Apakah kamu terkena demam?'
                    readOnly
                  />
                </div>
                <div class='input-group mb-3'>
                  <div class='input-group-prepend'>
                    <div class='input-group-text'>
                      <input
                        type='checkbox'
                        checked={this.state.checked5}
                        onChange={this.handleCheckedChange5.bind(this)}
                      />
                    </div>
                  </div>
                  <input
                    type='text'
                    class='form-control'
                    value='Apakah kamu menggigil dan sakit diseluruh tubuh?'
                    readOnly
                  />
                </div>
                <div class='input-group mb-3'>
                  <div class='input-group-prepend'>
                    <div class='input-group-text'>
                      <input
                        type='checkbox'
                        checked={this.state.checked6}
                        onChange={this.handleCheckedChange6.bind(this)}
                      />
                    </div>
                  </div>
                  <input
                    type='text'
                    class='form-control'
                    value='Apakah kamu mengalami masalah pencernaan?'
                    readOnly
                  />
                </div>
                <div class='input-group mb-3'>
                  <div class='input-group-prepend'>
                    <div class='input-group-text'>
                      <input
                        type='checkbox'
                        checked={this.state.checked7}
                        onChange={this.handleCheckedChange7.bind(this)}
                      />
                    </div>
                  </div>
                  <input
                    readOnly
                    type='text'
                    class='form-control'
                    value='Apakah kamu kehilangan bau dan rasa?'
                  />
                </div>
              </form>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
              <button
                type='button'
                class='btn btn-primary'
                onClick={this.toggle}
                data-dismiss='modal'
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ModalCek;
