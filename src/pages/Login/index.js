import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../assets/logo_img_1.png';
import loginImg from '../assets/login_img-2.png';

export default function Login() {
    return (
        <div>
            <div className="login-container">
                <section className="form">
                    <img src={logoImg} alt="logo-empresa" />

                    <form>
                        <h1>Insira seu CPF para buscarmos seu pedido: </h1>

                        <input type="number" placeholder="Insira seu CPF" />
                        <Link className="button" to="/purchase">Continuar</Link>
                    </form>
                </section>

                <img src={loginImg} alt="login" />
            </div>
        </div>
    );
} 