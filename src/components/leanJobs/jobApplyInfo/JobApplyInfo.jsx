/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import FowardArrowIcon from '@material-ui/icons/KeyboardArrowRight';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const JobApplyInfo = (props) => {

  const {
    jobSelected,
    applyToJob,
    setApplyToJob,
  } = props;

  return (
    <div className={`jobSelectedInfoBox${applyToJob ? ' jsi-hidden' : ''}`}>
      <div className="jobSelectedInfo">
        <h3 className="jobSelectedTitle"> {jobSelected.title} </h3>
        <p className="jobSelectedBasicInfo">Cidade: <span>{jobSelected.city}</span></p>
        <p className="jobSelectedBasicInfo">Regime: <span>{jobSelected.clt ? 'CLT' : 'PJ'}</span></p>
        {jobSelected.description.activities.length > 0 && (
          <ul>
            <h4 className="jobSelectedInfoListTitle">Atividade:</h4>
            {jobSelected.description.activities.map((activity, index) => (
              <li key={index} className="jobSelectedInfoListItem">{activity}</li>
            ))}
          </ul>
        )}
        {jobSelected.description.required.length > 0 && (
          <ul>
            <h4 className="jobSelectedInfoListTitle">Requisito:</h4>
            {jobSelected.description.required.map((require, index) => (
              <li key={index} className="jobSelectedInfoListItem">{require}</li>
            ))}
          </ul>
        )}
        {jobSelected.description.desirable.length > 0 && (
          <ul>
            <h4 className="jobSelectedInfoListTitle">Desejável:</h4>
            {jobSelected.description.desirable.map((desire, index) => (
              <li key={index} className="jobSelectedInfoListItem">{desire}</li>
            ))}
          </ul>
        )}
        {jobSelected.description.differentials.length > 0 && (
          <ul>
            <h4 className="jobSelectedInfoListTitle">Difirencial:</h4>
            {jobSelected.description.differentials.map((differential, index) => (
              <li key={index} className="jobSelectedInfoListItem">{differential}</li>
            ))}
          </ul>
        )}
        <button
          className="jobsSelectedApplyBtn"
          type="button"
          onClick={setApplyToJob}
        >
          Candidatar-se
        </button>
        <small className="jobSelectedCopyText">ou indique para um amigo</small>
        <button className="jobSelectedCopyBtn" type="button">
          <FileCopyIcon className="jobSelectedCopyIcon" /> Copiar Imagem
        </button>
      </div>
      <FowardArrowIcon className="jobSelectedInfoIcon" onClick={() => setApplyToJob(true)} />
    </div>
  );

};

JobApplyInfo.propTypes = {
  jobSelected: PropTypes.shape({
    title: PropTypes.string,
    city: PropTypes.string,
    clt: PropTypes.bool,
    description: PropTypes.shape({
      activities: PropTypes.arrayOf(PropTypes.string),
      required: PropTypes.arrayOf(PropTypes.string),
      desirable: PropTypes.arrayOf(PropTypes.string),
      differentials: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
  applyToJob: PropTypes.bool.isRequired,
  setApplyToJob: PropTypes.func.isRequired,
};

export default JobApplyInfo;
