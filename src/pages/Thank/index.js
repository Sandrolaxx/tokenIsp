import React from 'react';

import './styles.css';
import saleImgDesktop from '../assets/sale_image.png';
import saleImgMobile from '../assets/sale_image_mobile.svg';

export default function Thank() {
    return (
        <div className="thank-container">
            <div className="content">
                <h1>Obrigado por comprar na rede ISP Saúde!</h1>
                <p>
                    Nós recebemos a sua solicitação e estamos aguardando a aprovação do
                    pagamento, que pode demorar até 2 horas.<br />
                    Em breve entraremos em contato para te contar mais detalhes sobre seu pedido,
                    em quanto isso o que acha de passar nas nossas redes socias para acompanhar
                    as melhores ofertas da internet😁.
                </p>
                <div className="social-icons">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/ispsaudecascavel/" target="_blank">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span class="fbEffect"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ispsaude/?hl=pt-br" target="_blank">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span class="instaEffect"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span class="instaEffect"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span class="instaEffect"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <img className="desktop-illustration" src={saleImgDesktop} alt="Sale Image"/>
                <img className="mobile-illustration" src={saleImgMobile} alt="Sale Image"/>
            </div>
        </div>
    );
}