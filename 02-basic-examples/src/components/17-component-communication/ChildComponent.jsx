const ChildComponent = (props) => {
  // TODO
  const { onCallParent, count } = props;
  const atClick = () => {
    // TODO
    onCallParent('Hi, daddy');
  };
  return (
    <div className="child-component">
      <h3>ChildComponent</h3>
      <p>props.count:{count}</p>
      <button className="my-btn" onClick={atClick}>
        call Parent
      </button>
    </div>
  );
};

export default ChildComponent;
