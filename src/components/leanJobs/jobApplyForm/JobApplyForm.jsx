import React from 'react';
import PropTypes from 'prop-types';

import BackArrowIcon from '@material-ui/icons/KeyboardArrowLeft';

const JobApplyForm = (props) => {

  const {
    applyToJob,
    setApplyToJob,
  } = props;

  return (
    <div className={`jobApplyBox${applyToJob ? ' jaf-visible' : ''}`}>
      <BackArrowIcon className="jobApplFormIcon" onClick={setApplyToJob} />
      <form className="jobApplyForm" action="">
        <label htmlFor="jaf-name">
          Nome completo:
          <input id="jaf-name" className="form-control jaf-gInput" type="text" />
        </label>
        <label htmlFor="jaf-email">
          E-mail:
          <input id="jaf-email" className="form-control jaf-gInput" type="email" />
        </label>
        <label htmlFor="jaf-phone">
          Celular:
          <input id="jaf-phone" className="form-control jaf-gInput" type="text" />
        </label>
        <label htmlFor="jaf-file">
          Currículo:
          <input id="jaf-file" className="form-control jaf-fInput" type="email" />
        </label>
        <label htmlFor="jaf-text">
          Fale um pouco sobre você:
          <textarea id="jaf-text" className="form-control jaf-tInput" />
        </label>
        <button className="jobApplyBtn" type="submit">Enviar</button>
      </form>
    </div>
  );

};

JobApplyForm.propTypes = {
  applyToJob: PropTypes.bool.isRequired,
  setApplyToJob: PropTypes.func.isRequired,
};

export default JobApplyForm;
