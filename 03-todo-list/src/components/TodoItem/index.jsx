/* eslint-disable jsx-a11y/no-static-element-interactions */
import style from './TodoItem.module.scss';

const TodoItem = (props) => {
  const { id, text, done, onToggleItem } = props;

  const atClick = () => {
    onToggleItem(id);
  };

  return (
    <section data-name="TodoItem" data-gradient className="style-3">
      <div data-active={done} className={style.todoItem} onClick={atClick}>
        {text}
      </div>
      {/* FIXME delete not working */}
      <button className="button">Delete</button>
    </section>
  );
};

export default TodoItem;
