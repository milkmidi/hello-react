import Card from './Card';
import './style.scss';

const Example3 = () => {
  return (
    <section className="flex gap-4" data-name="Example3">
      <Card img="/imgs/pic01.jpg" name="milkmidi" />
      <Card img="/imgs/pic02.jpg" name="奶綠茶">
        <h1 className="bg-green-500">我是子元素</h1>
      </Card>
    </section>
  );
};
export default Example3;
