import React from 'react';

const initialState = [
  { label: '學會React', checked: true },
  { label: '學會Webpack', checked: false },
  { label: '年薪百萬', checked: false },
];

const FormCheckbox = () => {
  const [checkbox, setCheckbox] = React.useState(initialState);
  const atInputChange = (e) => {
    //* // TODO
    const idx = e.target.dataset.index / 1;
    const newCheckboxArr = checkbox.concat();
    newCheckboxArr[idx].checked = !newCheckboxArr[idx].checked;
    setCheckbox(newCheckboxArr);
    //* /
  };

  const onlyCheckListLabel = checkbox
    .filter((item) => item.checked)
    .map((item) => item.label);

  return (
    <section data-name="FormCheckbox">
      <p>checkList:{onlyCheckListLabel.toString()}</p>
      {checkbox.map(({ label, checked }, index) => {
        return (
          <label key={label} className="me-2">
            <input
              data-index={index}
              className="my-checkbox"
              type="checkbox"
              value={label}
              checked={checked}
              onChange={atInputChange}
            />
            {label}
          </label>
        );
      })}
    </section>
  );
};

export default FormCheckbox;
