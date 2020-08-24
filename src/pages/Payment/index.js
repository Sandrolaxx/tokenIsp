import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import securityImgMobile from '../assets/security_mobile.svg';
import securityImgDescktop from '../assets/security_payment.svg';

export default function Payment() {
    return (
        <div className="payment-container">
            <div className="form">
                <h1>Insira os dados do cartão</h1>
                <form>
                    <input type="number" placeholder="Número do cartão"></input>
                    <input type="text" placeholder="Nome impresso no cartão "></input>
                    <input type="date" placeholder="Válidade"></input>
                    <input type="number" placeholder="Código segurança"></input>
                    <input type="number" placeholder="CPF do titular do cartão"></input>
                </form>
                <Link className="button" to="/paymentSummary">Continuar</Link>
            </div>
            <div className="pay-image">
                <h1>Pode ficar tranquilo com seus dados! </h1>
                 <h2>O grupo ISP está dentro das normas da nova LGPD.</h2>

                <img className="desktop-illustration" src={securityImgDescktop} alt="securityImg" />
                <img className="mobile-illustration" src={securityImgMobile} alt="securityImg" />
            </div>
        </div>
    );
}                                                                                                                                                                        