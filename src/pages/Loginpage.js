import React, { Component } from 'react';
import config from '../utils/config';
import '../style/forms.css';

class Loginpage extends Component {
  state = {
    login: "",
    pass: "",
    errors: {
      login: false,
      pass: false
    }
  }

  messages = {
    login_incorrect: "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    email_incorrect: "Brak @ w emailu",
    password_incorrect: "Hasło musi mieć od 8 do 20 znaków",
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const validation = this.formValidation();
    if (validation.correct) {
      this.setState({
        login: "",
        pass: "",
        message: "Formularz został wysłany",

        errors: {
          login: false,
          pass: false,
        }
      })
    } else {

      this.setState({
        errors: {
          login: !validation.login,
          pass: !validation.password,
        }
      })
    }
  }


  formValidation = () => {

    let login = false;
    let password = false;
    let correct = false;

    if (this.state.login.length >= 10 && this.state.login.indexOf(' ') === -1) {
      login = true
    }
    //  if (this.state.email.indexOf('@') !== -1) {
    //       email = true
    //     }
    if (this.state.pass.length >= 8 && this.state.pass.length <= 20) {
      password = true
    }

    if (login && password) {
      correct = true
    }

    return ({
      correct,
      login,
      password
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, this.props);
    if (this.state.message !== "") {



      setTimeout(() => this.setState({
        message: ""
      }), 3000)
    }
  }

  render() {
    return (
      <>
        <form className='form myForm' onSubmit={this.handleSubmit} noValidate>
          <h2>Panel logowania</h2>
          <div className="form__field">
            <input type="text" name="login" id="login" className={this.state.errors.login ? "form__input invalidate" : (this.state.login.length > 0 ? "form__input filled" : "form__input")} value={this.state.login} onChange={this.handleInputChange} />
            <label htmlFor="login" className="form__label">Login</label>
            {this.state.errors.login && <span className="form__alert">{this.messages.login_incorrect}</span>}
          </div>


          <div className="form__field">
            <input type="password" name="pass" id="pass" className={this.state.errors.pass ? "form__input invalidate" : (this.state.pass.length > 0 ? "form__input filled" : "form__input")} value={this.state.pass} onChange={this.handleInputChange} />
            <label htmlFor="pass" className="form__label">Hasło</label>
            {this.state.errors.pass && <span className="form__alert">{this.messages.password_incorrect}</span>}
          </div>

          <button className='btn form__button'>Zaloguj</button>
        </form>
        {this.state.message && <h3 className="form__confirmation">{this.state.message}</h3>}


      </>
    );
  }
}

export default Loginpage;