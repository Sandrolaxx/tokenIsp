import React from 'react';
import { Link } from 'react-router-dom';
import { FiCreditCard } from 'react-icons/fi';

import './styles.css';

export default function PaymentSummary() {
    return (
        <div className="summary-container">
            <h1>Resumo do pagamento</h1>
            <section className="content">
                    <h2>
                        Resumo do Pagamento
                        <FiCreditCard size={25} color="#006eba" />
                    </h2>
                    <ul>
                        <li>
                            <strong>Produtos(1)</strong>

                            <strong >Frete</strong>

                            <strong >Total</strong>

                            <strong >Cartão do Pagamento</strong>
                        </li>
                        <li>
                            <p>R$ 135,60</p>

                            <p>Grátis</p>

                            <p> 1x R$ 135,60</p>

                            <p> 5149 45XX XXXX 2392</p>
                        </li>
                    </ul>
                </section>
            <Link className="button" to="/thank">Concluir Pagamento</Link>
        </div>
    );
}