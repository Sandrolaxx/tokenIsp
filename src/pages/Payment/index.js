import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Payment() {
    return (
        <div className="payment-container">
            <div className="content">
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
        </div>
    );
}