import { useState } from 'react';
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';

const initialList = [
  { id: 'id1', text: '學會React', done: true },
  { id: 'id2', text: '年薪百萬', done: false },
];

const TodoList = () => {
  const [list, setList] = useState(initialList);

  const atAddItem = (text) => {
    const item = {
      id: window.crypto.randomUUID(),
      text,
      done: false,
    };
    setList(list.concat(item));
  };

  const atToggleItem = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          text: item.text,
          done: !item.done,
        };
      }
      return item;
    });
    setList(newList);
  };

  return (
    <section className="todo-list" data-name="TodoList">
      <TodoForm onAddItem={atAddItem} />
      <div>
        {list.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            done={item.done}
            text={item.text}
            onToggleItem={atToggleItem}
          />
        ))}
      </div>
    </section>
  );
};

export default TodoList;
