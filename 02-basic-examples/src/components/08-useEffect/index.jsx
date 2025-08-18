import ExampleA from './A';
import ExampleB from './B';
import ExampleC from './C';

// areHookInputsEquals
// https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.new.js#L326-L371

const Example = () => {
  return (
    <section data-name="Example08">
      <ExampleA />
      {/* <ExampleB /> */}
      {/* <ExampleC /> */}
    </section>
  );
};
export default Example;
