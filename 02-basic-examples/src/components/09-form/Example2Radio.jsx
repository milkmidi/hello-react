import React from 'react';

const FormRadio = () => {
  const [gender, setGender] = React.useState('');
  const atRadioChange = (e) => {
    setGender(e.target.value);
  };

  // const gender1Id = React.useId();
  return (
    <section data-name="FormRadio">
      <p>gender:{gender}</p>
      <label className="me-3">
        <input
          name="gender"
          className="my-radio"
          checked={gender === '1'}
          type="radio"
          value="1"
          onChange={atRadioChange}
        />
        男
      </label>
      <label>
        <input
          name="gender"
          className="my-radio"
          checked={gender === '0'}
          type="radio"
          value="0"
          onChange={atRadioChange}
        />
        女
      </label>
    </section>
  );
};

export default FormRadio;
