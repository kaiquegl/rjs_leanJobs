import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ArrowLeft from '@material-ui/icons/ArrowBack';
import LeanworkLogoGray from '../../assets/images/leanworkLogoGray.png';
import JobsList from '../../components/leanJobs/jobsList/JobsList';
import JobApplyInfo from '../../components/leanJobs/jobApplyInfo/JobApplyInfo';
import JobApplyForm from '../../components/leanJobs/jobApplyForm/JobApplyForm';

import './styles.scss';

const LeanJobs = () => {

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
    <section className="leanJobs">
      <div className="leanJobsNavWrapper">
        <div className="container">
          <div className="leanJobsNavBox">
            <Link to="/"><img src={LeanworkLogoGray} className="navIcon" alt="LeanWork logo" /></Link>
            <ul>
              <li><Link to="/">LeanWork</Link></li>
              <li><Link to="/">LeanCommerce</Link></li>
              <li className="active">LeanVagas</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container ">
        {jobs && (
          <div className="leanJobsWrapper">
            <JobsList
              jobs={jobs}
              selectJob={(job) => setJobSelected(job)}
            />
            <div className="jobSelectedBox">
              {!jobSelected && (
                <p className="jobUnselected">
                  <ArrowLeft className="jobsUnselectedIcon" />
                  Selecione uma vaga!
                </p>
              )}
              {jobSelected && (
                <>
                  <JobApplyInfo
                    jobSelected={jobSelected}
                    applyToJob={applyToJob}
                    setApplyToJob={() => setApplyToJob(true)}
                  />
                  <JobApplyForm
                    jobSelected={jobSelected}
                    applyToJob={applyToJob}
                    setApplyToJob={() => setApplyToJob(false)}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );

};

export default LeanJobs;
