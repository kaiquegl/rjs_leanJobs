import React from 'react';
import PropTypes from 'prop-types';

const JobsList = (props) => {

  const {
    jobs,
    selectJob,
  } = props;

  return (
    <div className="jobsListBox">
      <h3 className="jobsListTitle">Vagas disponíveis:</h3>
      <div className="jobsList">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="jobImgBox"
            onClick={() => selectJob(job)}
            role="button"
            tabIndex="-1"
          >
            <img id={job.id} src={job.imagem} className="img-responsive jobImg" alt={job.titulo} />
          </div>
        ))}
      </div>
    </div>
  );

};

JobsList.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    imagem: PropTypes.string,
    titulo: PropTypes.string,
  })).isRequired,
  selectJob: PropTypes.func.isRequired,
};

export default JobsList;
