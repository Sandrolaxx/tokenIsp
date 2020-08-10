import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiTruck, FiCreditCard } from 'react-icons/fi';

import './styles.css';
import product from '../assets/bola-bean.jpg';

export default function Purchase() {
    return (
        <div className="purchase-container">
            <h1>Resumo do pedido</h1>
            <section className="content">
                <div className="products">
                    <h2>
                        Pedido
                        <FiShoppingBag size={25} color="#006eba" />
                    </h2>
                    <ul>
                        <li>
                            <strong>Produtos</strong>
                            <img src={product} alt="bola-bean" />
                        </li>
                        <li>
                            <strong>Descrição</strong>
                            <p className="description">A Bola Feijão Carci Bean é desenvolvida em produto vinílico e atóxico, 
                                sendo capaz de suportar até 200 Kg, com 106X70cm de diâmetro, 
                                proporcionando maior resistência e durabilidade ao produto.
                            </p>

                            <strong >Frete</strong>
                            <p>Grátis</p>

                            <strong >Valor</strong>
                            <p>R$ 135,60</p>
                        </li>
                    </ul>
                </div>
                <div className="payment">
                    <h2>
                        Forma de Pagamento
                        <FiCreditCard size={25} color="#006eba" />
                    </h2>
                    <ul>
                        <li>
                            <strong>Cartão de Crédito</strong>
                            <p>MASTERCARD</p>

                            <strong>Total</strong>
                            <p>1X R$ 135,60</p>
                        </li>
                    </ul>
                </div>
                <div className="delivery">
                    <h2>
                        Frete
                        <FiTruck size={25} color="#006eba" />
                    </h2>
                    <ul>
                        <li>
                            <strong>Bairro</strong>
                            <p>MARIA LUIZA, CASCAVEL, PR</p>
                            
                            <strong>Rua</strong>
                            <p>JAIME DUARTE LEAL - 257</p>

                            <strong>CEP</strong>
                            <p>85819-660</p>                            
                        </li>
                    </ul>
                </div>
                <p className="cancel">Algum dado do pedido está incorreto?<Link> clique aqui para cancelar.</Link></p>
            </section>
            <Link className="button" to="/payment">Continuar</Link>
        </div>
    );
}