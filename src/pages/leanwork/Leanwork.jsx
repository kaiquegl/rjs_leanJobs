/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useRef } from 'react';
import { window } from 'global';

import Header from '../../components/leanwork/header/Header';
import AboutUs from '../../components/leanwork/aboutUs/AboutUs';
import Services from '../../components/leanwork/services/Services';
import Solutions from '../../components/leanwork/solutions/Solutions';
import LeanComm from '../../components/leanwork/leanComm/LeanComm';
import Clients from '../../components/leanwork/clients/Clients';
import Contact from '../../components/leanwork/contact/Contact';

import './styles.css';
import './custom.css';

const InstitucionalPage = () => {

  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const solutionsRef = useRef(null);
  const leanCommRef = useRef(null);
  const clientsRef = useRef(null);

  const goTo = (ref) => {

    const { current: section } = ref;

    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });

  };

  return (
    <>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Alternat navegação</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <img src="/content/images/logo-leanwork-group.png" alt="Leanwork Group" className="logo img-responsive" />
            <span className="sr-only">Leanwork Group</span>

          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>Home</li>
              <li onClick={() => goTo(aboutUsRef)} role="button" tabIndex="-1">Quem Somos</li>
              <li>Serviços</li>
              <li>Clientes</li>
              <li className="active">Orçamento</li>
              <li>Contato</li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="section section-banner">
        <Header />
      </section>
      <section ref={aboutUsRef} className="section section-intro-quemsomos">
        <AboutUs />
      </section>
      <section ref={servicesRef} className="section section-intro-leanit">
        <Services />
      </section>
      <section ref={solutionsRef} className="section section-intro-solucoes">
        <Solutions />
      </section>
      <section ref={leanCommRef} className="section section-intro-leancommerce">
        <LeanComm />
      </section>
      <section className="section section-intro-one">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="section-intro-one-title">Gerencie suas promoções, alimente sua loja e acompanhe suas vendas.</h2>
              <h2 className="section-intro-one-title white">Tudo feito de maneira prática e fácil.</h2>

              <i className="icon icon-right-arrow" />
              <span>conheça a plataforma<br />leancommerce</span>

            </div>
          </div>
        </div>
      </section>
      <section ref={clientsRef} className="section section-intro-clientes">
        <Clients />
      </section>
      <section className="section section-intro-depoimentos">
        <div className="container">
          <h1 className="sr-only">Depoimentos de clientes</h1>
          <div className="row">
            <h2 className="section-intro-depoimentos-title">depoimentos</h2>
            <div className="col-md-12">
              <div className="swiper-container swiper-container-testmonials">
                <div className="swiper-wrapper clients-testmonials">
                  <div className="swiper-slide">
                    <div className="testmonial-item">
                      <blockquote>
                        A Leanwork já é um parceiro nosso de longa data, estão sempre presentes e comprometidos a nos
                        atender não só tecnicamente, mas com um excelente atendimento e pró-atividade em trazer soluções ao
                        invés de questionar problemas, na prática acabam sendo mais que um fornecedor, praticamente uma
                        extensão de nossa equipe, recomendo!
                      </blockquote>
                      <p className="testmonial-author">Daniel Vidotti - CIO</p>
                      <div className="testmonial-company">Centauro - Grupo SBF</div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testmonial-item">
                      <blockquote>
                        Mais do que um fornecedor, a Leanwork é um verdadeiro parceiro capaz de identificar não apenas
                        nossas necessidades, mas principalmente
                        nossas expectativas, e trabalha lado a lado conosco para juntos atingirmos nossos objetivos.
                        Já realizamos muito juntos e acredito que realizaremos ainda muito mais!
                      </blockquote>
                      <p className="testmonial-author">Ricardo Silva - Gerente de Projetos</p>
                      <div className="testmonial-company">Avalia Educacional - Grupo Santillana</div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testmonial-item">
                      <blockquote>
                        O trabalho da Leanwork foi imprescindível para o sucesso da nova plataforma da Netfarma. Sem o
                        comprometimento e a qualidade dos entregáveis deles, não teríamos conseguido atingir o nosso
                        objetivo.
                      </blockquote>
                      <p className="testmonial-author">Homero Romão Filho - CTO</p>
                      <div className="testmonial-company">Netfarma</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-white" />
                <div className="container swiper-pagination-container">
                  <div className="swiper-button-next swiper-button-white" />
                  <div className="swiper-button-prev swiper-button-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-intro-parceiros">
        <div className="container">
          <div className="row">
            <h2 className="section-intro-parceiros-title">nossos parceiros</h2>
            <div className="col-md-12">
              <ul className="parceiros-list">
                <li>
                  <img src="/content/images/parceiro-utfpr.png" alt="UTFPR" className="img-responsive" />
                </li>
                <li>
                  <img src="/content/images/parceiro-bizspark.png" alt="Microsoft BizSpark" className="img-responsive" />
                </li>
                <li>
                  <img src="/content/images/parceiro-rawf.png" alt="RAWF Comunicação e Design" className="img-responsive" />
                </li>
                <li>
                  <img src="/content/images/parceiro-jooble.png" alt="JOOBLE" className="img-responsive" />

                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-intro-one">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-1 col-md-8">
              <h2 className="section-intro-one-title-lg">FICOU interessado?</h2>
              <h2 className="section-intro-one-subtitle-lg">
                Consulte nossa página de orçamentos, temos vários planos para cada tipo de negócio.
                Entre em contato conosco caso a sua empresa precisa de uma solução customizada.
              </h2>
            </div>
            <div className="col-md-2">
              <i className="icon icon-right-arrow" />
              <span>fazer<br />orçamento</span>

            </div>
          </div>
        </div>
      </section>
      <section id="contato" className="section section-contact">
        <Contact />
      </section>
      <footer className="footer footer-default footer-sticky">
        <div className="container">
          <p className="copyright">
            &copy; Copyright 2019 Leanwork Tecnologia LTDA. Todos os direitos reservados.
          </p>
          <i className="icon icon-rawf" />
          <span className="sr-only">
            RAWF Comunicação
          </span>
        </div>
      </footer>
    </>
  );

};

export default InstitucionalPage;
