import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import BackArrowIcon from '@material-ui/icons/KeyboardArrowLeft';

const JobApplyForm = (props) => {

  const initialState = {
    fullName: '',
    email: '',
    cellPhone: '',
    curriculum: '',
    aboutYou: '',
  };

  const reducer = (state, { field, value }) => ({
    ...state,
    [field]: value,
  });

  const {
    applyToJob,
    setApplyToJob,
  } = props;

  const [state, dispatch] = useReducer(reducer, initialState);

  const onInputChange = (e) => {

    dispatch({ field: e.target.name, value: e.target.value });

  };

  const {
    fullName,
    email,
    cellPhone,
    curriculum,
    aboutYou,
  } = state;

  return (
    <div className={`jobApplyBox${applyToJob ? ' jaf-visible' : ''}`}>
      <BackArrowIcon className="jobApplFormIcon" onClick={setApplyToJob} />
      <form className="jobApplyForm" action="">
        <label htmlFor="jaf-name">
          Nome completo:
          <input
            id="jaf-name"
            name="fullName"
            className="form-control jaf-gInput"
            value={fullName}
            onChange={onInputChange}
            type="text"
          />
        </label>
        <label htmlFor="jaf-email">
          E-mail:
          <input
            id="jaf-email"
            name="email"
            className="form-control jaf-gInput"
            value={email}
            onChange={onInputChange}
            type="email"
          />
        </label>
        <label htmlFor="jaf-phone">
          Celular:
          <input
            id="jaf-phone"
            name="cellPhone"
            className="form-control jaf-gInput"
            value={cellPhone}
            onChange={onInputChange}
            type="text"
          />
        </label>
        <label htmlFor="jaf-file">
          Currículo:
          <input
            id="jaf-file"
            name="curriculum"
            className="form-control jaf-fInput"
            value={curriculum}
            onChange={onInputChange}
            type="file"
          />
        </label>
        <label htmlFor="jaf-text">
          Fale um pouco sobre você:
          <textarea
            id="jaf-text"
            name="aboutYou"
            className="form-control jaf-tInput"
            value={aboutYou}
            onChange={onInputChange}
          />
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
