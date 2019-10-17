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
          <h3 className="jobSelectedTitle"> {jobSelected.titulo} </h3>
          <p className="jobSelectedBasicInfo">Cidade: <span>{jobSelected.cidade}</span></p>
          <p className="jobSelectedBasicInfo">Regime: <span>{jobSelected.modeloContratacao}{jobSelected.modeloTrabalho ? ` - ${jobSelected.modeloTrabalho}` : ''}</span></p>
          {jobSelected.caracteristicas.map((caracteristicas, i) => (
            <ul key={i}>
              <h4 className="jobSelectedInfoListTitle">{caracteristicas.nome}:</h4>
              {caracteristicas.itens.map((activity, index) => (
                <li key={index} className="jobSelectedInfoListItem">{activity}</li>
              ))}
            </ul>
          ))}
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
            text={jobSelected.imagem}
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
    titulo: PropTypes.string,
    cidade: PropTypes.string,
    modeloContratacao: PropTypes.string,
    modeloTrabalho: PropTypes.string,
    imagem: PropTypes.string,
    caracteristicas: PropTypes.arrayOf(PropTypes.shape({
      itens: PropTypes.arrayOf(PropTypes.string),
      nome: PropTypes.string,
    })),
  }).isRequired,
  applyToJob: PropTypes.bool.isRequired,
  setApplyToJob: PropTypes.func.isRequired,
};

export default JobApplyInfo;
