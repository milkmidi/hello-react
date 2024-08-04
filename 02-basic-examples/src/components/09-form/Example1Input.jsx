import React from 'react';

// FIXME 實作 email 即時驗證
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const FormInput = () => {
  const [name, setName] = React.useState('');
  const atChange = (e) => {
    // TODO
    setName(e.target.value);
  };

  return (
    <section data-name="FormInput">
      <p>name:{name}</p>
      {/* TODO */}
      <input
        type="text"
        className="my-input"
        value={name}
        onChange={atChange}
      />
    </section>
  );
};

export default FormInput;
