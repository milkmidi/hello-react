import './app.scss';

// TODO
// Embedding Expressions in JSX
// https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx
const FunctionalComponent = () => {
  const name = 'milkmidi';
  return (
    <div className="functional-component">
      <ul>
        <li>這是 Functional Component</li>
        <li>name:{name}</li>
        <li>今天日期： {new Date().toDateString()}</li>
        <li>1+1={1 + 1}</li>
      </ul>
    </div>
  );
};

const Example2 = () => {
  return (
    <section data-name="Example02">
      <FunctionalComponent />
    </section>
  );
};
export default Example2;
