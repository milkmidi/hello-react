import React from 'react';

const FormSelect = () => {
  const [select, setSelect] = React.useState('');
  const atSelectChange = (e) => {
    setSelect(e.target.value);
  };
  return (
    <section data-name="FormSelect">
      <p>select:{select}</p>
      <select className="my-input" value={select} onChange={atSelectChange}>
        <option disabled value="">
          Please select
        </option>
        <option value="React">React</option>
        <option value="Vue">Vue</option>
        <option value="Angular">Angular</option>
      </select>
    </section>
  );
};

export default FormSelect;
