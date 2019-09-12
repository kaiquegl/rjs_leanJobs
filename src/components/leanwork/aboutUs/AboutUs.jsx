import React from 'react';

const AboutUs = () => {

  return (
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
  );

};

export default AboutUs;
