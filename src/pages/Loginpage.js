import React, { Component } from 'react';
import Loader from '../components/Loader';
import config from '../api/config';
import '../style/forms.css';

class Loginpage extends Component {
  state = {
    login: '',
    pass: '',
    errors: {
      login: false,
      pass: false
    }
  };

  messages = {
    login_incorrect:
      'Nazwa musi być dłuższa niż 4 znaki i nie może zawierać spacji',
    email_incorrect: 'Brak @ w emailu',
    password_incorrect: 'Hasło musi mieć od 8 do 20 znaków'
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const validation = this.formValidation();
    if (validation.correct) {
      fetch(`${config.baseCorsUrl}login/${this.state.login}.${this.state.pass}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('error ', res.status);
          }
        })
        .then(([data]) => {
          if (data) {
            this.setState({
              message: 'Logowanie poprawne',
              loading: false,
              alert: false
            });
            localStorage.setItem('state', 'login');
            localStorage.setItem('user', this.state.login);
            this.props.history.push({
              pathname: '/sensitive-cra/admin',
              user: this.state.login
            });
          } else {
            this.setState({
              message: 'Błędny login lub hasło',
              loading: false,
              alert: true
            });
          }
        })
        .catch(err => console.log(err));

      this.setState({
        loading: true,

        errors: {
          login: false,
          pass: false
        }
      });
    } else {
      this.setState({
        errors: {
          login: !validation.login,
          pass: !validation.password
        }
      });
    }
  };

  formValidation = () => {
    let login = false;
    let password = false;
    let correct = false;

    if (this.state.login.length >= 4 && this.state.login.indexOf(' ') === -1) {
      login = true;
    }
    //  if (this.state.email.indexOf('@') !== -1) {
    //       email = true
    //     }
    if (this.state.pass.length >= 8 && this.state.pass.length <= 20) {
      password = true;
    }

    if (login && password) {
      correct = true;
    }

    return {
      correct,
      login,
      password
    };
  };

  render() {
    return (
      <>
        <form className="form myForm" onSubmit={this.handleSubmit} noValidate>
          <h2>Panel logowania</h2>
          <div className="form__field">
            <input
              type="text"
              name="login"
              id="login"
              className={
                this.state.errors.login
                  ? 'form__input invalidate'
                  : this.state.login.length > 0
                  ? 'form__input filled'
                  : 'form__input'
              }
              value={this.state.login}
              onChange={this.handleInputChange}
            />
            <label htmlFor="login" className="form__label">
              Login
            </label>
            {this.state.errors.login && (
              <span className="form__alert">
                {this.messages.login_incorrect}
              </span>
            )}
          </div>

          <div className="form__field">
            <input
              type="password"
              name="pass"
              id="pass"
              className={
                this.state.errors.pass
                  ? 'form__input invalidate'
                  : this.state.pass.length > 0
                  ? 'form__input filled'
                  : 'form__input'
              }
              value={this.state.pass}
              onChange={this.handleInputChange}
            />
            <label htmlFor="pass" className="form__label">
              Hasło
            </label>
            {this.state.errors.pass && (
              <span className="form__alert">
                {this.messages.password_incorrect}
              </span>
            )}
          </div>

          <button className="btn form__button">Zaloguj</button>
        </form>
        <aside className="otherInformation">
          {this.state.loading && <Loader />}
          {this.state.message && (
            <h3
              className={
                this.state.alert ? 'form__alert' : 'form__confirmation'
              }
            >
              {this.state.message}
            </h3>
          )}
        </aside>
      </>
    );
  }
}

export default Loginpage;
