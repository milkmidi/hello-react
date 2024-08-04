import Example1 from './Example1';
import Example3 from './Example3';
import Example6 from './Example6';

// areHookInputsEquals
// https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.new.js#L326-L371

const Example = () => {
  return (
    <section data-name="Example08">
      <Example1 />
      {/* <Example3 /> */}
      {/* <Example6 /> */}
    </section>
  );
};
export default Example;
