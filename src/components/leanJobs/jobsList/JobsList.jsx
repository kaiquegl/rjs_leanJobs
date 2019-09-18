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
            <img id={job.id + job.title} src={job.img} className="img-responsive jobImg" alt={job.title} />
          </div>
        ))}
      </div>
    </div>
  );

};

JobsList.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
  selectJob: PropTypes.func.isRequired,
};

export default JobsList;
