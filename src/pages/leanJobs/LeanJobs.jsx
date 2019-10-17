import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [jobsApiError, setJobsApiError] = useState(false);

  useEffect(() => {

    const fetchData = async () => {

      const { data, error } = await axios.get('https://lean-processos-api.azurewebsites.net/api/vagas', {
        headers: {
          Authorization: 'Basic bGVhbjpsZWFuMDBA',
        },
      });

      if (error) setJobsApiError(true);
      else setJobs(data);

    };

    fetchData();

  }, []);

  return (
    <section className="leanJobs">
      <div className="leanJobsNavWrapper">
        <div className="container">
          <div className="leanJobsNavBox">
            <Link to="/">
              <img
                src={LeanworkLogoGray}
                className="navIcon"
                alt="LeanWork logo"
              />
            </Link>
            <ul>
              <li>
                <Link to="/">LeanWork</Link>
              </li>
              <li>
                <Link to="/">LeanCommerce</Link>
              </li>
              <li className="active">LeanVagas</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        {jobs && (
          <div className="leanJobsWrapper">
            <JobsList jobs={jobs} selectJob={(job) => setJobSelected(job)} />
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
