import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';

const FetchAPIExample = () => {
  const [data, setData] = useState([]);

  // TODO 1
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <section data-name="Example10">
      {data.map((item) => {
        return (
          <div key={item.id} className="border">
            <p>{item.title}</p>
            <small>{item.id}</small>
          </div>
        );
      })}
      {/* 
      {data.map((item) => {
        return <TodoItem key={item.id} id={item.id} title={item.title} />;
      })}
       */}
    </section>
  );
};

export default FetchAPIExample;
