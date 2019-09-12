import React from 'react';

const Contact = () => (
  <div className="container">
    <div className="col-sm-12 col-md-7">
      <ul className="contact-tabs">
        <li className="active">
          <span>Solicitar</span> orçamento
        </li>
        <li>
          Fale conosco
        </li>
      </ul>
      <div className="tab-content">
        <div id="pane-orcamento" className="tab-pane fade in active">
          <form id="form-orcamento" className="form" data-parsley-validate>
            <div className="form-group">
              <input type="text" className="form-control" name="nome" placeholder="Nome" data-parsley-required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" placeholder="Email" data-parsley-required data-parsley-type="email" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control mask-phone" name="telefone" placeholder="Telefone" data-parsley-required />
            </div>
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
            <div className="form-group">
              <textarea className="form-control" name="mensagem" placeholder="Mensagem" data-parsley-required />
            </div>
            <div className="form-group text-center">
              <button type="button" className="btn btn-primary">Enviar mensagem</button>
              <input type="reset" className="hide" />
            </div>
          </form>
        </div>
        <div id="pane-contato" className="tab-pane fade">
          <form id="form-contato" className="form" data-parsley-validate>
            <div className="form-group">
              <input type="text" className="form-control" name="nome" placeholder="Nome" data-parsley-required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" placeholder="Email" data-parsley-required data-parsley-type="email" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control mask-phone" name="telefone" placeholder="Telefone" data-parsley-required />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="assunto" placeholder="Assunto" data-parsley-required />
            </div>
            <div className="form-group">
              <textarea className="form-control" name="mensagem" placeholder="Mensagem" data-parsley-required />
            </div>
            <div className="form-group text-center">
              <button type="button" className="btn btn-primary">Enviar mensagem</button>
              <input type="reset" className="hide" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-5">
      <div className="logo">
        <h1 className="sr-only">Leanwork Group</h1>
        <i className="icon icon-leanwork" />
      </div>
      <ul className="address-list">
        <li>
          <i className="icon icon-pin" />
          <div className="address-list-container">
            <address>
              <span>Rua Ibiporã, 529 - Sala 01</span>
              <span>Centro, Londrina - PR</span>
            </address>
          </div>
        </li>
        <li>
          <i className="icon icon-phone" />
          <div className="address-list-container">
            Tel: (43) 3026-1120
          </div>
        </li>
        <li>
          <i className="icon icon-clock" />
          <div className="address-list-container">
            <p>
              Horário de funcionamento:
              <br /> Seg. a Sex. das 8h as 18h
            </p>
          </div>
        </li>
        <li>
          <i className="icon icon-email" />
          <div className="address-list-container">
            contato@leanwork.com.br
          </div>
        </li>
      </ul>
      <div className="follow-us">
        <p>Siga-nos nas redes sociais:</p>
        <ul>
          <li><i className="fa fa-linkedin" /> Blog</li>
          <li><i className="fa fa-git" /> Github</li>
          <li><i className="fa fa-facebook" /> Facebook </li>
        </ul>
      </div>
      <nav className="contact-list">Quem Somos
        Serviços
        Clientes
        Trabalhe Conosco
      </nav>
    </div>
  </div>
);

export default Contact;
