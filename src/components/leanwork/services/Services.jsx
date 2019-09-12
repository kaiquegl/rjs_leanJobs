import React from 'react';

const Services = () => {

  return (
    <>
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
              <li className="active">Mobile</li>
              <li>Software</li>
              <li>Integração</li>
              <li>Consultoria</li>
              <li>Outsourcing</li>
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
          <i className="icon icon-right-arrow"></i>
          <span>Saiba mais<br />Fale Conosco</span>

        </div>
      </div>
    </>
  );

};

export default Services;
