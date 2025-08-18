import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const FetchAPIExample = () => {
  const [data, setData] = useState([]);

  // TODO
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <section data-name="Example10">
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => {
          return <ProductItem key={item.id} id={item.id} title={item.title} />;
        })}
      </div>
    </section>
  );
};

export default FetchAPIExample;
