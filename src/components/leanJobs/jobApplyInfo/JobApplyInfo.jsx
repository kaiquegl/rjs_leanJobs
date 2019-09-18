/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import FowardArrowIcon from '@material-ui/icons/KeyboardArrowRight';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const JobApplyInfo = (props) => {

  const {
    jobSelected,
    applyToJob,
    setApplyToJob,
  } = props;

  const [copyBtnText, setCopyBtnText] = useState('Copiar Imagem');

  const copiedCurrentImgUrl = () => {

    setCopyBtnText('Imagem Copiada');

    setTimeout(() => {

      setCopyBtnText('Copiar Imagem');

    }, 1000);

  };

  return (
    <div className={`jobSelectedInfoWrapper${applyToJob ? ' jsi-hidden' : ''}`}>
      <div className="jobSelectedInfo">
        <div className="jobSelectedInfoBox">
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
        </div>
        <div className="jobSelectedBtns">
          <button
            className="jobSelectedApplyBtn"
            type="button"
            onClick={setApplyToJob}
          >
            Candidatar-se
          </button>
          <small className="jobSelectedCopyText">ou indique para um amigo</small>
          <CopyToClipboard
            text={jobSelected.img}
            onCopy={copiedCurrentImgUrl}
          >
            <button
              className="jobSelectedCopyBtn"
              type="button"
            >
              <FileCopyIcon className="jobSelectedCopyIcon" /> {copyBtnText}
            </button>
          </CopyToClipboard>
        </div>
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
    img: PropTypes.string,
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
