import React, { useState, useEffect } from 'react';

import ArrowLeft from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';

import './styles.scss';

const Jobs = () => {

  const [jobs, setJobs] = useState(undefined);
  const [jobSelected, setJobSelected] = useState(undefined);
  const [applyToJob, setApplyToJob] = useState(false);

  useEffect(() => {

    setJobs([
      {
        id: 0,
        title: 'Analista de MKT Digital Junior',
        city: 'Londrina',
        clt: true,
        img: 'https://media.licdn.com/dms/image/C4D22AQFc1muXNPOLuw/feedshare-shrink_2048_1536/0?e=1571270400&v=beta&t=jkQO3nNskHuvhrNvR5QB0pRnh0Qss2Z4UBm3oAk2TQc',
        description: {
          activities: [
            'Produção de conteúdo para redes sociais',
            'Produção de conteúdo para endomarketing',
            'Gestão de mídias sociais (LinkedIn, Instagram e Facebook)',
            'Prospecção e qualificação de Leads',
            'Análise Mercado e concorrência',
            'Definição de Personas',
          ],
          required: [
            'Experiência em gestão de mídias sociais',
            'Facilidade para criação de conteúdo',
            'Boa comunicação interpessoal',
            'Criatividade',
            'Proatividade',
          ],
          desirable: [
            'Experiência com plataformas de Marketing Digital (Google Ads, Analytics, etc)',
            'Facilidade para trabalho em equipe',
          ],
          differentials: [
            'Experiência nos programas do pacote Adobe',
            'Facilidade com ferramenta para envio de e-mail marketing',
          ],
        },
      },
      {
        id: 1,
        title: 'Desenvolvedor Back-end Pleno ou Sênior',
        city: 'São Paulo',
        clt: false,
        img: 'https://media.licdn.com/dms/image/C4E22AQHKtE-5y94w_w/feedshare-shrink_2048_1536/0?e=1571270400&v=beta&t=zHYbx80r3uXft27GxF8A62RbIVxS-OamQJoY1mHtdu4',
        description: {
          activities: [],
          required: [
            'Domínio em orientação a objeto, linguagem C#, ASP.NET (MVC ou Core), HTML, CSS, Javascript, SQL',
          ],
          desirable: [
            'Padrões de projeto, GIT, NoSql, Nodejs',
          ],
          differentials: [
            'Microsoft Azure, RabbitMQ, Apache Nifi',
          ],
        },
      },
      {
        id: 2,
        title: 'Product Owner',
        city: 'Londrina',
        clt: false,
        img: 'https://media.licdn.com/dms/image/C4D22AQE_YxaRPtZoWQ/feedshare-shrink_1280/0?e=1571270400&v=beta&t=LRcOU058eMwAhWsjKMTxCRNr8x-5ajCxi9XpbHgrj0U',
        description: {
          activities: [],
          required: [
            'Conhecimento e experiência na área de metodologias ágeis',
            'Foco na construção do produto e conhecimento das suas características',
            'Habilidade em interação e negociação com stakeholders',
            'Acompanhamento das atividades, definição de prioridades, análises de performance e acompanhamento de resultados',
          ],
          desirable: [],
          differentials: [],
        },
      },
      {
        id: 3,
        title: 'Back End Pleno',
        city: 'Londrina',
        clt: false,
        img: 'https://media.licdn.com/dms/image/C4D22AQHQSMxJZvz1aw/feedshare-shrink_1280/0?e=1571270400&v=beta&t=Ykav475zAF_M6D4aRR5VhL1pIl9N9sHjB8aSoywdPYg',
        description: {
          activities: [],
          required: [
            'Domínio em orientação a objeto, linguagem C#, ASP.NET (MVC ou Core), HTML, CSS, Javascript, SQL',
          ],
          desirable: [
            'Padrões de projeto, GIT, NoSql, Nodejs',
          ],
          differentials: [
            'Microsoft Azure, RabbitMQ, Apache Nifi',
          ],
        },
      },
    ]);

  }, []);

  return (
    <div className="container leanJobs">
      <div className="jobsListBox">
        <h3 className="jobsListTitle">Vagas disponíveis:</h3>
        <div className="jobsList">
          {jobs && (
            jobs.map((job) => (
              <div
                key={job.id}
                className="jobImgBox"
                onClick={() => setJobSelected(job)}
                role="button"
                tabIndex="-1"
              >
                <img src={job.img} className="img-responsive jobImg" alt={job.title} />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="jobSelectedBox">
        {!jobSelected && (
          <p className="jobUnselected">
            <ArrowLeft className="jobsUnselectedIcon" />
            Selecione uma vaga!
          </p>
        )}
        {jobSelected && (
          <div className="jobSelectedInfo">
            <h3 className="jobSelectedTitle">
              {jobSelected.title} <CloseIcon className="jobSelectedCloseIcon" onClick={() => setJobSelected(undefined)} />
            </h3>
            <p className="jobSelectedBasicInfo">Cidade: <span>{jobSelected.city}</span></p>
            <p className="jobSelectedBasicInfo">Regime: <span>{jobSelected.clt ? 'CLT' : 'PJ'}</span></p>
            {jobSelected.description.activities.length > 0 && (
              <ul>
                <h4 className="jobSelectedInfoListTitle">Atividade:</h4>
                {jobSelected.description.activities.map((activity) => (
                  <li className="jobSelectedInfoListItem">{activity}</li>
                ))}
              </ul>
            )}
            {jobSelected.description.required.length > 0 && (
              <ul>
                <h4 className="jobSelectedInfoListTitle">Requisito:</h4>
                {jobSelected.description.required.map((require) => (
                  <li className="jobSelectedInfoListItem">{require}</li>
                ))}
              </ul>
            )}
            {jobSelected.description.desirable.length > 0 && (
              <ul>
                <h4 className="jobSelectedInfoListTitle">Desejável:</h4>
                {jobSelected.description.desirable.map((desire) => (
                  <li className="jobSelectedInfoListItem">{desire}</li>
                ))}
              </ul>
            )}
            {jobSelected.description.differentials.length > 0 && (
              <ul>
                <h4 className="jobSelectedInfoListTitle">Difirencial:</h4>
                {jobSelected.description.differentials.map((differential) => (
                  <li className="jobSelectedInfoListItem">{differential}</li>
                ))}
              </ul>
            )}
            <button
              className="jobsSelectedApplyBtn"
              type="button"
              onClick={() => setApplyToJob(true)}
            >
              Candidatar-se
            </button>
          </div>
        )}
      </div>
    </div>
  );

};

export default Jobs;
