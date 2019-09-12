import React from 'react';

const Solutions = () => {

  return (
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
              <i className="icon icon-leanmanager"></i>Lean<br />Manager
                  <span className="subtitle">
                Sistema gestor <br />para sua empresa
                  </span>
            </li>
            <li>
              <i className="icon icon-leanfaq"></i>Lean<br />FAQ
                  <span className="subtitle">
                Plataforma de<br />atendimendo<br />automatizado
                  </span>
            </li>
            <li>
              <i className="icon icon-leanquality"></i>Lean<br />Quality
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
  );

};

export default Solutions;
