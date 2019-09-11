import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import './custom.css';

const HomePage = () => {

  return (
    <Fragment>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
              aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Alternat navegação</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="#">
              <img src="/content/images/logo-leanwork-group.png" alt="Leanwork Group" className="logo img-responsive" />
              <span className="sr-only">Leanwork Group</span>
            </Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="#">Home</Link></li>
              <li><Link to="#quem-somos">Quem Somos</Link></li>
              <li><Link to="#servicos">Serviços</Link></li>
              <li><Link to="#clientes">Clientes</Link></li>
              <li className="active"><Link to="#orcamento">Orçamento</Link></li>
              <li><Link to="#contato">Contato</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="section section-banner">
        <h1 className="sr-only">E-commerce, software sob demanda e aplicativos</h1>
        <p className="sr-only">A Leanwork atua no Desenvolvimento de Plataforma Ecommerce exclusiva e alinhada ao negócio,
          Integrações entre sistemas (ERP, CRM, Marketplaces, etc) e Software Customizado</p>
        <div className="swiper-container swiper-container-banner">
          <div className="swiper-wrapper">
            <div className="swiper-slide" style={{ backgroundImage: "url('content/images/banner-01.jpg')" }}>
              <div className="swiper-slide-container">
                <p className="swiper-slide-title">
                  Planejamento, execução
                  <br /> E retorno do investimento
                </p>
                <p className="swiper-slide-description">
                  Oferecemos soluções completas para o desenvolvimento, monitoramento
                  <br /> e assessoria em ferramentas de compra, venda e sistemas
                  <br /> digitais na internet.
                </p>
                <Link to="#servicos" className="btn btn-primary">Saiba mais</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="quem-somos" className="section section-intro-quemsomos">
        <div className="container">
          <div className="row">
            <div className="col-md-6 hidden-xs">
              <span className="icon icon-lean-devices"></span>
            </div>
            <div className="col-md-6">
              <h2 className="section-intro-quemsomos-title">
                Quem Somos
              </h2>
              <h4 className="section-intro-quemsomos-subtitle">
                Foco em oferecer soluções práticas e eficientes em desenvolvimento e tecnologia.
              </h4>
              <div className="section-intro-quemsomos-description">
                <p>
                  A Leanwork é um grupo empresarial composto pelas as empresas Lean IT Service e LeanCommerce. Enquanto
                  IT Service é especializada em desenvolvimento de projetos de software customizados para cada negócio,
                  a LeanCommerce é focada em comércio eletrônico, e desenvolve plataformas exclusivas de e-commerce
                  e soluções personalizadas para cada perfil de cliente.
                </p>
                <p>
                  As empresas atuam por meio de metodologias ágeis que garantem um processo de trabalho transparente,
                  gerenciável
                  e preparado para responder às mudanças que ocorrem em cada ambiente de negócio. O foco é entregar
                  resultados expressivos com qualidade e dentro do prazo.
                </p>
                <p>
                  Nossa gestão é otimizada para o cenário de cada cliente, permitindo extrair o máximo de ambas as partes
                  e estar atento às mudanças rápidas inerentes a cada negócio. Buscamos fazer mais com menos, o que
                  nos estimula a criatividade e nos orienta a encontrar alternativas mais eficientes para solucionar
                  problemas complexos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="servicos" className="section section-intro-leanit">
        <div className="container">
          <div className="row">
            <div className="col-md-5 section-intro-leanit-logo">
              <img src="/content/images/logo-leanit.png" alt="Lean IT Services" className="logo img-responsive" />
              <span className="sr-only">Lean IT Services</span>
            </div>
            <div className="col-md-7">
              <div className="section-intro-leanit-description">
                <p>
                  Uma empresa especializada em desenvolvimento de software, aplicativos para smartphones, consultoria,
                  integração de sistemas e inovação. Possuímos soluções de ponta a ponta, adequadas às empresas de
                  todos os portes e perfis de negócios. Confira alguns de nossos serviços:
              </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="lean-panel-menu">
                <li className="active"><Link to="#it-mobile" data-toggle="tab">Mobile</Link></li>
                <li><Link to="#it-software" data-toggle="tab">Software</Link></li>
                <li><Link to="#it-integracao" data-toggle="tab">Integração</Link></li>
                <li><Link to="#it-consultoria" data-toggle="tab">Consultoria</Link></li>
                <li><Link to="#it-outsourcing" data-toggle="tab">Outsourcing</Link></li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="tab-content">
                <div id="it-mobile" className="lean-panel-content tab-pane fade active in">
                  Possuímos uma equipe altamente capacitada tecnicamente e unida, com desenvolvimento de aplicativos nativos
                  para as plataformas
                  iOS e Android, com ótimo desempenho e agilidade. Desenvolvemos nossos aplicativos com as linguagens e
                  bibliotecas em suas
                  versões mais recentes disponíveis no mercado, sempre ligados nas tendências de uso comportamento, prezando
                  sempre pela qualidade
                  e manutenção de nossos códigos. Monitoramos e prevenirmos possíveis falhas utilizando uma das melhores
                  plataformas, como
                  Fabric, recém adquirido pela Google. Com ela temos estatísticas de downloads, utilização e muito mais.
                </div>
                <div id="it-software" className="lean-panel-content tab-pane fade">
                  Desenvolvimento de softwares customizados de acordo com as necessidades do seu negócio.
                </div>
                <div id="it-integracao" className="lean-panel-content tab-pane fade">
                  Realização de integração entre sistemas, sejam eles: ERP, marketplaces, CRM, intranet, módulos entre
                  outros.
                </div>
                <div id="it-consultoria" className="lean-panel-content tab-pane fade">
                  Consultorias em TI e realização de diagnósticos das necessidades e/ou problemas que motivaram o
                  desenvolvimento dos softwares,
                  realizando a documentação de maneira ágil e adequada.
                </div>
                <div id="it-outsourcing" className="lean-panel-content tab-pane fade">
                  Alocação de recursos (outsourcing): Disponibilização de profissionais de alta performance em
                  desenvolvimento, gestão e arquitetura
                  de desenvolvimento web e mobile (iOS e Android).
                </div>
              </div>
            </div>
            <div className="col-md-6 hidden-sm hidden-xs">
              <span className="icon icon-girl"></span>
            </div>
          </div>
        </div>
        <div className="fale-conosco">
          <div className="container">
            <Link to="#" className="btn btn-secondary">
              <i className="icon icon-right-arrow"></i>
              <span>Saiba mais<br />Fale Conosco</span>
            </Link>
          </div>
        </div>
      </section>
      <section id="solucoes" className="section section-intro-solucoes">
        <div className="container">
          <div className="row">
            <div className="col-md-6 hidden-xs">
              <span className="icon icon-solucoes"></span>
            </div>
            <div className="col-md-6">
              <h2 className="section-intro-solucoes-title">
                Nossas Soluções
              </h2>
              <h4 className="section-intro-solucoes-subtitle">
                Realize suas tarefas de maneira prática e inteligente, com as <br />
                ferramentas de gerenciamento e manutenção da sua rede de clientes.
              </h4>
              <ul className="lean-panel-menu">
                <li className="active">
                  <Link to="#solucoes-manager" data-toggle="tab"><i className="icon icon-leanmanager"></i>Lean<br />Manager</Link>
                  <span className="subtitle">
                    Sistema gestor <br />para sua empresa
                  </span>
                </li>
                <li>
                  <Link to="#solucoes-faq" data-toggle="tab"><i className="icon icon-leanfaq"></i>Lean<br />FAQ</Link>
                  <span className="subtitle">
                    Plataforma de<br />atendimendo<br />automatizado
                  </span>
                </li>
                <li>
                  <Link to="#solucoes-quality" data-toggle="tab"><i className="icon icon-leanquality"></i>Lean<br />Quality</Link>
                  <span className="subtitle">
                    Monitoria, suporte e<br />treinamento
                  </span>
                </li>
              </ul>
              <div className="tab-content">
                <div id="solucoes-manager" className="lean-panel-content tab-pane fade active in">
                  Possuímos uma equipe altamente capacitada tecnicamente e unida, com desenvolvimento de aplicativos nativos
                  para as plataformas
                  iOS e Android, com ótimo desempenho e agilidade. Desenvolvemos nossos aplicativos com as linguagens e
                  bibliotecas em suas
                  versões mais recentes disponíveis no mercado, sempre ligados nas tendências de uso comportamento, prezando
                  sempre pela qualidade
                  e manutenção de nossos códigos. Monitoramos e prevenirmos possíveis falhas utilizando uma das melhores
                  plataformas, como
                  Fabric, recém adquirido pela Google. Com ela temos estatísticas de downloads, utilização e muito mais.
                </div>
                <div id="solucoes-faq" className="lean-panel-content tab-pane fade">
                  Ferramenta de autoatendimento para sites e plataformas web através da qual os clientes de sua empresa
                  podem sanar dúvidas
                  de forma ágil e conveniente. Possui um robusto dashboard de indicadores e múltiplos canais de atendimento.
                </div>
                <div id="solucoes-quality" className="lean-panel-content tab-pane fade">
                  Ferramenta de monitoria de qualidade para equipes de atendimento, suporte e treinamento. Através dessa
                  ferramenta é possível
                  personalizar avaliações que proporcionam o acompanhamento e a avaliação da qualidade e performance da sua
                  equipe.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="leancommerce" className="section section-intro-leancommerce">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="section-intro-leancommerce-logo">
                <img src="/content/images/logo-leancommerce.png" className="img-responsive" alt="teste" />
              </div>
              <h4 className="section-intro-leancommerce-subtitle">
                Plataforma de e-commerce de alta performance projetada para atender
                as demandas do mercado de todos os níveis e porte das organizações.
              </h4>
              <div className="section-intro-leancommerce-description">
                <p>
                  Trabalhamos com plataforma própria, desenvolvida com base no know-how adquirido em parceria com os
                  principais players do varejo
                  nacional. A plataforma oferece flexibilidade de customização dos recursos, performance de operação e
                  melhor experiência
                  de compra.
                </p>
                <p>
                  Além de possuir as principais funcionalidades que seu negócio precisa, a LeanCommerce ainda conta com um
                  time especializado
                  em comércio online capaz de auxiliá-los na compreensão do mercado e no aumento das vendas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-intro-one">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="section-intro-one-title">Gerencie suas promoções, alimente sua loja e acompanhe suas vendas.</h2>
              <h2 className="section-intro-one-title white">Tudo feito de maneira prática e fácil.</h2>
              <Link to="http://www.leancommerce.com.br/" className="btn btn-secondary" target="_blank">
                <i className="icon icon-right-arrow"></i>
                <span>conheça a plataforma<br />leancommerce</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="clientes" className="section section-intro-clientes">
        <div className="container">
          <div className="row">
            <h2 className="section-intro-clientes-title">NOSSOS CLIENTES</h2>
            <h2 className="section-intro-clientes-subtitle">
              Conheça algumas das empresas que depositam sua confiança em nosso trabalho. <br />
              Venha fazer parte dessa conquista!
            </h2>
            <div className="col-md-12">
              <ul className="clients-list">
                <li>
                  <img src="/content/images/logo-centauro.png" alt="Centauro" className="img-responsive" />
                </li>
                <li>
                  <img src="/content/images/logo-walmart.png" alt="Walmart" className="img-responsive" />
                </li>
                <li>
                  <img src="/content/images/logo-viavarejo.png" alt="Via Varejo" className="img-responsive" />
                </li>
                <li>
                  <img src="/content/images/logo-syngenta.png" alt="Syngenta" className="img-responsive" />
                </li>
                <li>
                  <img src="/content/images/logo-avalia.png" alt="Avalia Educacional" className="img-responsive" />
                </li>
                <li>
                  <img src="/content/images/logo-editoramoderna.png" alt="Editora Modenrna" className="img-responsive" />
                </li>
                <li>
                  <img src="/content/images/logo-netfarma.png" alt="Netfarma" className="img-responsive" />
                </li>
                <li>
                  <img src="/content/images/logo-g1imo.png" alt="G1 Imobiliária" className="img-responsive" />
                </li>
                <li>
                  <img src="/content/images/logo-suplementus.png" alt="Loja Suplementus" className="img-responsive" />
                </li>
                <li>
                  <img src="/content/images/logo-flashlimp.png" alt="Flash Limp" className="img-responsive" />
                </li>
                <li>
                  <img src="/content/images/logo-euro.png" alt="Euro Home" className="img-responsive" />
                </li>
                <li>
                  <img src="/content/images/logo-vibe.png" alt="Vibe" className="img-responsive" />
                </li>
              </ul>
            </div>
          </div>
        </div>
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
                <div className="swiper-pagination swiper-pagination-white"></div>
                <div className="container swiper-pagination-container">
                  <div className="swiper-button-next swiper-button-white"></div>
                  <div className="swiper-button-prev swiper-button-white"></div>
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
                  <Link to="https://pt.jooble.org/emprego-software-developer" target="_blank">
                    <img src="/content/images/parceiro-jooble.png" alt="JOOBLE" className="img-responsive" />
                  </Link>
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
              <Link to="#form-contact-1" className="btn btn-secondary btn-lg">
                <i className="icon icon-right-arrow"></i>
                <span>fazer<br />orçamento</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="contato" className="section section-contact">
        <div className="container">
          <div className="col-sm-12 col-md-7">
            <ul className="contact-tabs">
              <li className="active">
                <Link data-toggle="tab" to="#pane-orcamento">
                  <span>Solicitar</span> orçamento
                </Link>
              </li>
              <li>
                <Link data-toggle="tab" to="#pane-contato">Fale conosco</Link>
              </li>
            </ul>
            <div className="tab-content">
              <div id="pane-orcamento" className="tab-pane fade in active">
                <form id="form-orcamento" className="form" data-parsley-validate>
                  <div className="form-group"> <input type="text" className="form-control" name="nome" placeholder="Nome"
                    data-parsley-required /> </div>
                  <div className="form-group"> <input type="email" className="form-control" name="email" placeholder="Email"
                    data-parsley-required data-parsley-type="email" /> </div>
                  <div className="form-group"> <input type="text" className="form-control mask-phone" name="telefone"
                    placeholder="Telefone" data-parsley-required /> </div>
                  <div className="form-group">
                    <div className="custom-select">
                      <select className="form-control" name="origem" defaultValue="" data-parsley-required>
                        <option value="">Como conheceu a Leanwork?</option>
                        <option value="Site parceiro">Site parceiro</option>
                        <option value="Redes sociais">Redes sociais</option>
                        <option value="Anúncio">Anúncio</option>
                        <option value="Buscador">Buscador</option>
                        <option value="Indicação">Indicação</option>
                        <option value="Outros">Outros</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-select">
                      <select className="form-control" defaultValue="" name="perfil" data-parsley-required>
                        <option value="">Qual seu perfil de empresa?</option>
                        <option value="Microempreendedor">Microempreendedor</option>
                        <option value="Pequena empresa">Pequena empresa</option>
                        <option value="Médio porte">Médio porte</option>
                        <option value="Grande porte">Grande porte</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group"> <textarea className="form-control" name="mensagem" placeholder="Mensagem"
                    data-parsley-required></textarea> </div>
                  <div className="form-group text-center">
                    <button className="btn btn-primary">Enviar mensagem</button>
                    <input type="reset" className="hide" />
                  </div>
                </form>
              </div>
              <div id="pane-contato" className="tab-pane fade">
                <form id="form-contato" className="form" data-parsley-validate>
                  <div className="form-group"> <input type="text" className="form-control" name="nome" placeholder="Nome"
                    data-parsley-required /> </div>
                  <div className="form-group"> <input type="email" className="form-control" name="email" placeholder="Email"
                    data-parsley-required data-parsley-type="email" /> </div>
                  <div className="form-group"> <input type="text" className="form-control mask-phone" name="telefone"
                    placeholder="Telefone" data-parsley-required /> </div>
                  <div className="form-group"> <input type="text" className="form-control" name="assunto" placeholder="Assunto"
                    data-parsley-required /> </div>
                  <div className="form-group"> <textarea className="form-control" name="mensagem" placeholder="Mensagem"
                    data-parsley-required ></textarea> </div>
                  <div className="form-group text-center">
                    <button className="btn btn-primary">Enviar mensagem</button>
                    <input type="reset" className="hide" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5">
            <div className="logo">
              <h1 className="sr-only">Leanwork Group</h1>
              <i className="icon icon-leanwork"></i>
            </div>
            <ul className="address-list">
              <li>
                <i className="icon icon-pin"></i>
                <div className="address-list-container">
                  <address>
                    <span>Rua Ibiporã, 529 - Sala 01</span>
                    <span>Centro, Londrina - PR</span>
                  </address>
                </div>
              </li>
              <li>
                <i className="icon icon-phone"></i>
                <div className="address-list-container">
                  <Link to="tel:+554330261120">Tel: (43) 3026-1120</Link>
                </div>
              </li>
              <li>
                <i className="icon icon-clock"></i>
                <div className="address-list-container">
                  <p>
                    Horário de funcionamento:
                    <br /> Seg. a Sex. das 8h as 18h
                  </p>
                </div>
              </li>
              <li>
                <i className="icon icon-email"></i>
                <div className="address-list-container">
                  <Link to="mailto:contato@leanwork.com.br">contato@leanwork.com.br</Link>
                </div>
              </li>
            </ul>
            <div className="follow-us">
              <p>Siga-nos nas redes sociais:</p>
              <ul>
                <li><Link to="https://www.linkedin.com/company/leanwork-tecnologia/" target="_blank"><i
                  className="fa fa-linkedin"></i> Blog</Link></li>
                <li><Link to="https://github.com/leanwork/" target="_blank"><i className="fa fa-git"></i> Github</Link></li>
                <li><Link to="https://www.facebook.com/leanwork/" target="_blank"><i className="fa fa-facebook"></i> Facebook</Link>
                </li>
              </ul>
            </div>
            <nav className="contact-list">
              <Link to="#quem-somos">Quem Somos</Link>
              <Link to="#servicos">Serviços</Link>
              <Link to="#clientes">Clientes</Link>
              <Link to="https://github.com/leanwork/trabalhe-conosco" target="_blank" className="active">Trabalhe Conosco</Link>
            </nav>
          </div>
        </div>
      </section>
      <footer className="footer footer-default footer-sticky">
        <div className="container">
          <p className="copyright">&copy; Copyright 2019 <Link to="http://www.leanwork.com.br">Leanwork Tecnologia LTDA</Link>.
            Todos os direitos reservados.</p>
          <Link to="#" className="designed-by" title="RAWF Comunicação"> <i className="icon icon-rawf"></i> <span
            className="sr-only">RAWF Comunicação</span> </Link>
        </div>
      </footer>
    </Fragment>
  );

};

export default HomePage;
