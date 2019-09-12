import React from 'react';

const Header = () => {

  return (
    <>
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
              <button className="btn btn-primary">Saiba mais</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default Header;
