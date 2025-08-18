import Example02 from './02-component';
import Example03 from './03-props';
import Example04 from './04-state';
import Example05 from './05-conditional-rendering';
import Example06 from './06-styles';
import Example07 from './07-rendering-lists';
import Example08 from './08-useEffect';
import Example09 from './09-form';
import Example10 from './10-fetch-data';
import Example11 from './11-1A2B';
import Example17 from './17-component-communication';

const App = () => {
  const ExampleComponent = Example02;
  return (
    <div className="app">
      <ExampleComponent />
    </div>
  );
};

export default App;
