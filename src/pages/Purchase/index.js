import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiTruck, FiCreditCard } from 'react-icons/fi';

import './styles.css';
import productOne from '../assets/bola_cravo.jpg';
import productTwo from '../assets/meia_bola.jpg';

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
                    <section className="images-and-details">
                        <div className="images">
                            <strong>Produtos</strong>
                            <img src={productOne} alt="bola-bean" />
                            <img src={productTwo} alt="bola-bean" />
                        </div>
                        <div className="description">
                            <ul>
                                <li>
                                    <strong>Descrição</strong>
                                    <p>Bola Cravo Antiestresse - Arktus
                                    </p>

                                    <strong >Frete</strong>
                                    <p>Grátis</p>

                                    <strong >Valor</strong>
                                    <p>R$ 135,60</p>
                                </li>
                                <li>
                                    <strong>Descrição</strong>
                                    <p>Meia Bola Bosu com Elásticos, Alças e Bomba - Arktus.</p>

                                    <strong >Frete</strong>
                                    <p>Grátis</p>

                                    <strong >Valor</strong>
                                    <p>R$ 135,60</p>
                                </li>
                            </ul>
                        </div>
                    </section>
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
                            <p>1X de R$ 271,20</p>
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