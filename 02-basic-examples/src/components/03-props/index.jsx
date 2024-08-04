import Card from './Card';
import './style.scss';

const Example3 = () => {
  return (
    <section data-name="Example3" className="flex">
      <Card img="http://fakeimg.pl/500x300/3498db/" name="milkmidi" />
      <Card img="http://fakeimg.pl/500x300/e74c3c/" name="奶綠茶">
        <h1 className="bg-info">我是子元素</h1>
      </Card>
    </section>
  );
};
export default Example3;
