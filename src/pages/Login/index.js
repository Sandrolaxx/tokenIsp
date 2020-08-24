import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../assets/logo_img_1.png';
import loginImg from '../assets/payment_img_login.svg';
import loginImgMobile from '../assets/payment_img_login_mobile.svg';

class Login extends Component {

    render() {
        return (
                <div className="login-container">

                    <img className="logo" src={logoImg} alt="logo-empresa" />

                    <section className="form">
                        <form>
                            <h1>Insira seu CPF para buscarmos seu pedido: </h1>

                            <input type="number" placeholder="Insira seu CPF" />
                            <Link className="button" to="/purchase">Continuar</Link>
                        </form>
                    </section>

                    <img className="desktop-illustration" src={loginImg} alt="login" />
                    <img className="mobile-illustration" src={loginImgMobile} alt="login" />
                </div>
        );
    }
}

export default Login;